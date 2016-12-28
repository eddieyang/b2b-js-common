'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _imCommons = require('./im-commons');

var _imCommons2 = _interopRequireDefault(_imCommons);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IM = function () {
  function IM() {
    _classCallCheck(this, IM);

    this.drawNumberStompTopic = {};
  }

  _createClass(IM, [{
    key: 'connect',
    value: function connect(userId, callback) {
      _imCommons2.default.WebMessageBridge().connect(userId, _common.baseDomain + '/rtmsg', callback);
    }
  }, {
    key: 'subscribeDrawResult',
    value: function subscribeDrawResult(gameCode, callback, afterSubscribeCallback) {

      var drawNumberTopicUrl = '/topic/draw_number/' + gameCode;
      this.drawNumberStompTopic[gameCode] = _imCommons2.default.StompTopic();
      this.drawNumberStompTopic[gameCode].topic = drawNumberTopicUrl;
      this.drawNumberStompTopic[gameCode].subscribe(function (message) {
        return callback(message);
      }, afterSubscribeCallback);
    }
  }, {
    key: 'unsubscribeDrawResult',
    value: function unsubscribeDrawResult(gameCode) {

      if (!this.drawNumberStompTopic[gameCode]) {
        return;
      }
      this.drawNumberStompTopic[gameCode].unsubscribe();
    }
  }, {
    key: 'subscribeUserChannel',
    value: function subscribeUserChannel(userId, callback) {

      var userTopicUrl = '/topic/user/' + userId;
      this.userTopic = _imCommons2.default.StompTopic();
      this.userTopic.topic = userTopicUrl;
      this.userTopic.subscribe(function (message) {
        return callback(message);
      });
    }
  }, {
    key: 'unSubscribeUserChannel',
    value: function unSubscribeUserChannel() {
      this.userTopic.unsubscribe();
    }
  }]);

  return IM;
}();

exports.default = IM;