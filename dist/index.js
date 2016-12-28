'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootReducer = exports.lang = exports.IM = exports.Model = exports.reducer = exports.actions = undefined;

var _langs = require('./langs');

var _actions2 = require('./actions');

var _actions3 = _interopRequireDefault(_actions2);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _Modal = require('./components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _im = require('./libs/im');

var _im2 = _interopRequireDefault(_im);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.actions = _actions3.default;
exports.reducer = _reducers2.default;
exports.Model = _Modal2.default;
exports.IM = _im2.default;
var lang = exports.lang = {
  zh_cn: _langs.zh_cn
};

exports.rootReducer = _reducers2.default;