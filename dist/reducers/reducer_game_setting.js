'use strict';

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
    case _index.FETCH_GAME_SETTING:
      if (action.payload.data) {
        var bettingModes = _lodashCompat2.default.sortByOrder(action.payload.data.bettingModes, ['unit'], ['desc']);
        return _extends({}, action.payload.data, { bettingModes: bettingModes });
      }
  }

  return state;
};

var _index = require('../src/actions/index');

var _lodashCompat = require('lodash-compat');

var _lodashCompat2 = _interopRequireDefault(_lodashCompat);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var INIT_STATE = {
  bettingModes: []
};