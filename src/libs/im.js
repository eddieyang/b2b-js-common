import TcgWebSocket from './im-commons';
import { baseDomain } from '../common';

export default class IM {

  constructor() {
    this.drawNumberStompTopic = {};
  }

  connect(userId, callback) {
    TcgWebSocket.WebMessageBridge().connect(userId, `/rtmsg`, callback);
  }

  subscribeDrawResult(gameCode, callback, afterSubscribeCallback) {

    const drawNumberTopicUrl = `/topic/draw_number/${gameCode}`;
    this.drawNumberStompTopic[gameCode] = TcgWebSocket.StompTopic();
    this.drawNumberStompTopic[gameCode].topic = drawNumberTopicUrl;
    this.drawNumberStompTopic[gameCode].subscribe((message) => callback(message), afterSubscribeCallback);
  }

  unsubscribeDrawResult(gameCode) {

    if (!this.drawNumberStompTopic[gameCode]) {
      return;
    }
    this.drawNumberStompTopic[gameCode].unsubscribe();
  }

  subscribeUserChannel(userId, callback) {

    const userTopicUrl = `/topic/user/${userId}`;
    this.userTopic = TcgWebSocket.StompTopic();
    this.userTopic.topic = userTopicUrl;
    this.userTopic.subscribe((message) => callback(message));
  }

  unSubscribeUserChannel() {
    this.userTopic.unsubscribe();
  }
}