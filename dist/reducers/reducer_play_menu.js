"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _index.FETCH_PLAY_MENU:
      if (action.payload.data) {
        return action.payload.data.reduce(function (last, playMenus) {
          if (playMenus.playMenuGroups.length) {
            return _extends({}, last, _defineProperty({}, playMenus.prizeModeId, playMenus));
          }
          return last;
        }, {});
      }
      break;
    case _index.GAME_SELECTED:
      return {};
  }

  return state;
};

var _index = require("../src/actions/index");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}