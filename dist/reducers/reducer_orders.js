"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INIT_STATE;
  var action = arguments[1];


  switch (action.type) {
    case _index.ONE_CLICK_BET:
      break;
    case _index.FETCH_BET_HISTORY:
      if (action.payload.data) {
        return _extends({}, state, { betHistory: action.payload.data });
      }
      break;
    case _index.CANCEL_BET_ORDER:
      if (action.payload.data) {
        return _extends({}, state, { cancelResult: action.payload.data });
      }
      break;
  }

  return state;
};

var _index = require("../actions/index");

var INIT_STATE = {};