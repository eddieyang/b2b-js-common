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
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INIT_STATE;
  var action = arguments[1];


  switch (action.type) {
    case _index.GAME_SELECTED:
      if (action.payload) {
        var game = action.payload;
        return _extends({}, state, { game: game });
      }
      break;

    case _index.PRIZE_MODE_SELECTED:
      if (action.payload) {
        var prizeModeId = action.payload;
        return _extends({}, state, { prizeModeId: prizeModeId });
      }
      break;
  }

  return state;
};

var _index = require("../src/actions/index");

var INIT_STATE = {
  game: {},
  prizeModeId: 1
};