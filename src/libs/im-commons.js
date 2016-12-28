import SockJS from './bower-sockjs-client';
import './stomp-websocket';

const websocket_debug = false;

class WebMessageBridge {

  constructor() {
    this.endpoint = '';
    this.connected = false;
    this.disconnected = false;
    this.sockjs = undefined;
    this.stompClient = undefined;
    this.reconnectTimer = undefined;
    this.reconnectTimeout = 10000;
  }

  connect(token, endpoint, connectedCallback) {

    const _this = this;

    if (!_this.isEmpty(endpoint)) {
      _this.endpoint = endpoint;
      _this.disconnected = false;
    } else if (_this.isEmpty(_this.endpoint)) {
      throw "connect endpoint is null.";
    }

    // const options = {
    //     protocols_whitelist = ['websocket', 'xhr-pooling', 'iframe-xhr-polling','iframe-htmlfile','xdr-polling'],
    //     debug = UU.websocket_debug
    // };
    _this.sockjs = new SockJS(_this.endpoint, null, null);
    _this.stompClient = Stomp.over(_this.sockjs);

    if (!this.websocket_debug) {
      _this.stompClient.debug = null;
    }

    _this.stompClient.connect(token, token, (frame) => {

      _this.connected = true;
      if (connectedCallback) {
        connectedCallback();
      }

    }, () => {

      if (!_this.disconnected) {
        _this.disconnected = false;
        _this.reconnect();
      }
    });
  }

  disconnect() {

    clearTimeout(this.reconnectTimer);
    this.disconnected = true;

    if (stompClient) {

      try {
        this.stompClient.disconnect();
      } catch (ex) {
        //Logger("disconnect failed = ", ex);
      }

      this.connected = false;
      this.stompClient = undefined;
      delete this.sockjs;
      this.sockjs = undefined;
    }

  }

  subscribe(topic, func) {
    if (this.connected) {
      return this.stompClient.subscribe(topic, func);
    }
  }

  reconnect() {
    const _this = this;

    _this.reconnectTimer = setTimeout(() => {
      _this.connect();
    }, this.reconnectTimeout);
  }

  stateChanaged() {
    //Logger('Connected:' , this.get('connected'));
  }

  isEmpty(str) {
    return (!str || /^\s*$/.test(str));
  }

}

class StompTopic {

  constructor(messageBridge) {

    this.messageBridge = messageBridge;
    this.subscription = null;
    this.funcCallback = null;
    this.onSubscribeCallback = undefined;
    this.topic = '';
    this.message = '';
  }

  subscribe(func, callbackFunc) {

    const _this = this;
    this.funcCallback = func;
    this.onSubscribeCallback = callbackFunc;

    this.subscribeTimeout = setTimeout(() => {
      _this.subscription = _this.messageBridge.subscribe(_this.topic, (message) => {
        _this.message = message;
        if (func) {
          func(message.body);
        }
      });

      if (_this.subscription && typeof(callbackFunc) === 'function') {
        callbackFunc();
      }

    }, 1500);

    this.onConnectedChange();
  }

  unsubscribe() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = null;
    this.funcCallback = null;
    this.message = '';

    clearTimeout(this.subscribeTimeout);
    clearInterval(this.checkConnectedChange);
  }

  onConnectedChange(lastConnect = true) {
    // Re-Subscribe if reconnected.
    const connected = this.messageBridge.connected;
    if (lastConnect !== connected && !connected && this.subscription) {
      this.subscribe(this.funcCallback, this.onSubscribeCallback);
    }

    // check connected change every 10s
    if (this.subscription) {
      const currentConnect = this.messageBridge.connected;
      this.checkConnectedChange = setTimeout(() => {
        this.onConnectedChange(currentConnect);
      }, 10 * 1000);
    }
  }

}

const webMessageBridge = new WebMessageBridge();
class TcgWebSocket {

  static WebMessageBridge() {
    return webMessageBridge;
  }

  static StompTopic() {
    return new StompTopic(webMessageBridge);
  }

}

export default TcgWebSocket;