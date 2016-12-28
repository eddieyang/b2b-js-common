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
    case _index.TOGGLE_GAP:
      return _extends({}, state, { hot: false, gap: true });
    case _index.TOGGLE_HOT:
      return _extends({}, state, { hot: true, gap: false });
    case _index.FETCH_HOT_GAP:
      if (action.payload.data) {
        var gap = _lodashCompat2.default.reduce(action.payload.data.gap, function (result, n, key) {
          return _extends({}, result, _defineProperty({}, DIGIT[key], n));
        }, {});
        var hot = _lodashCompat2.default.reduce(action.payload.data.hot, function (result, n, key) {
          return _extends({}, result, _defineProperty({}, DIGIT[key], n));
        }, {});
        return _extends({}, state, { info: { gap: gap, hot: hot } });
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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

var INIT_STATE = {
  gameId: null,
  hot: false,
  gap: true,
  info: {}
};

var DIGIT = {
  FIRST: '1',
  SECOND: '2',
  THIRD: '3',
  FOURTH: '4',
  FIFTH: '5',
  SIXTH: '6',
  SEVENTH: '7',
  EIGHTH: '8',
  NINTH: '9',
  TENTH: '10'
};