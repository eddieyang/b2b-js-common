'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INIT_STATE;
  var action = arguments[1];

  switch (action.type) {
    //TODO Test
    case _index.FETCH_BET_HISTORY:
      if (action.payload.data) {
        var _state = action.payload.data;
        return _state;
      }

  }
  return state;
};

var _index = require('../actions/index');

var INIT_STATE = {};