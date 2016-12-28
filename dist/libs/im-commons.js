'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sockjs = require('bower-sockjs-client/sockjs.min');

var _sockjs2 = _interopRequireDefault(_sockjs);

require('stomp-websocket/stomp.min');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var websocket_debug = false;

var WebMessageBridge = function () {
  function WebMessageBridge() {
    _classCallCheck(this, WebMessageBridge);

    this.endpoint = '';
    this.connected = false;
    this.disconnected = false;
    this.sockjs = undefined;
    this.stompClient = undefined;
    this.reconnectTimer = undefined;
    this.reconnectTimeout = 10000;
  }

  _createClass(WebMessageBridge, [{
    key: 'connect',
    value: function connect(token, endpoint, connectedCallback) {

      var _this = this;

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
      _this.sockjs = new _sockjs2.default(_this.endpoint, null, null);
      _this.stompClient = Stomp.over(_this.sockjs);

      if (!this.websocket_debug) {
        _this.stompClient.debug = null;
      }

      _this.stompClient.connect(token, token, function (frame) {

        _this.connected = true;
        if (connectedCallback) {
          connectedCallback();
        }
      }, function () {

        if (!_this.disconnected) {
          _this.disconnected = false;
          _this.reconnect();
        }
      });
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {

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
  }, {
    key: 'subscribe',
    value: function subscribe(topic, func) {
      if (this.connected) {
        return this.stompClient.subscribe(topic, func);
      }
    }
  }, {
    key: 'reconnect',
    value: function reconnect() {
      var _this = this;

      _this.reconnectTimer = setTimeout(function () {
        _this.connect();
      }, this.reconnectTimeout);
    }
  }, {
    key: 'stateChanaged',
    value: function stateChanaged() {
      //Logger('Connected:' , this.get('connected'));
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty(str) {
      return !str || /^\s*$/.test(str);
    }
  }]);

  return WebMessageBridge;
}();

var _StompTopic = function () {
  function StompTopic(messageBridge) {
    _classCallCheck(this, StompTopic);

    this.messageBridge = messageBridge;
    this.subscription = null;
    this.funcCallback = null;
    this.onSubscribeCallback = undefined;
    this.topic = '';
    this.message = '';
  }

  _createClass(StompTopic, [{
    key: 'subscribe',
    value: function subscribe(func, callbackFunc) {

      var _this = this;
      this.funcCallback = func;
      this.onSubscribeCallback = callbackFunc;

      this.subscribeTimeout = setTimeout(function () {
        _this.subscription = _this.messageBridge.subscribe(_this.topic, function (message) {
          _this.message = message;
          if (func) {
            func(message.body);
          }
        });

        if (_this.subscription && typeof callbackFunc === 'function') {
          callbackFunc();
        }
      }, 1500);

      this.onConnectedChange();
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe() {

      if (this.subscription) {
        this.subscription.unsubscribe();
      }

      this.subscription = null;
      this.funcCallback = null;
      this.message = '';

      clearTimeout(this.subscribeTimeout);
      clearInterval(this.checkConnectedChange);
    }
  }, {
    key: 'onConnectedChange',
    value: function onConnectedChange() {
      var _this2 = this;

      var lastConnect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      // Re-Subscribe if reconnected.
      var connected = this.messageBridge.connected;
      if (lastConnect !== connected && !connected && this.subscription) {
        this.subscribe(this.funcCallback, this.onSubscribeCallback);
      }

      // check connected change every 10s
      if (this.subscription) {
        (function () {
          var currentConnect = _this2.messageBridge.connected;
          _this2.checkConnectedChange = setTimeout(function () {
            _this2.onConnectedChange(currentConnect);
          }, 10 * 1000);
        })();
      }
    }
  }]);

  return StompTopic;
}();

var webMessageBridge = new WebMessageBridge();

var TcgWebSocket = function () {
  function TcgWebSocket() {
    _classCallCheck(this, TcgWebSocket);
  }

  _createClass(TcgWebSocket, null, [{
    key: 'WebMessageBridge',
    value: function WebMessageBridge() {
      return webMessageBridge;
    }
  }, {
    key: 'StompTopic',
    value: function StompTopic() {
      return new _StompTopic(webMessageBridge);
    }
  }]);

  return TcgWebSocket;
}();

exports.default = TcgWebSocket;