'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lang = undefined;

var _zh_cn2 = require('./zh_cn');

var _zh_cn3 = _interopRequireDefault(_zh_cn2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findByLangKey = function findByLangKey(lang, key) {
  var val = lang[key];
  if (!val) {
    return key;
  }
  return lang;
};

var lang = exports.lang = {
  zh_cn: function zh_cn(key) {
    return findByLangKey(_zh_cn3.default, key);
  }
};