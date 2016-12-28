"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];


  switch (action.type) {
    case _index.FETCH_GAME_NUMERO:
      return action.payload.data || {};
  }

  return state;
};

var _index = require("../actions/index");