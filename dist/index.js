'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonReducer = exports.lang = exports.IM = exports.Model = exports.actions = undefined;

var _reducers = require('./reducers');

Object.defineProperty(exports, 'commonReducer', {
  enumerable: true,
  get: function get() {
    return _reducers.commonReducer;
  }
});

var _langs = require('./langs');

var _actions2 = require('./actions');

var _actions3 = _interopRequireDefault(_actions2);

var _Modal = require('./components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _im = require('./libs/im');

var _im2 = _interopRequireDefault(_im);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.actions = _actions3.default;
exports.Model = _Modal2.default;
exports.IM = _im2.default;
var lang = exports.lang = { zh_cn: _langs.zh_cn };