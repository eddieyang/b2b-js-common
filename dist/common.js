'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseDomain = undefined;
exports.getToken = getToken;
exports.getMerchant = getMerchant;
exports.getHeader = getHeader;
exports.splitWinNo = splitWinNo;

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseDomain = exports.baseDomain = 'http://lott.dev1.com';

var TCG = {
  login: function login(customerName, password) {

    var ussUrl = baseDomain + '/uss/customer_sessions';
    var lgwUrl = baseDomain + '/lgw/sessions';
    var Merchant = '2000cai';

    var loginLgw = function loginLgw(id, token) {
      var data = {
        "customerId": '' + id,
        "token": '' + token,
        "merchant": "2000cai",
        "gameGroupSeries": [{
          "gameGroupCode": "SSC",
          "prizeModeId": "1",
          "minSeries": 1700,
          "maxSeries": 1956,
          "maxBetSeries": 1950
        }, {
          "gameGroupCode": "SSC",
          "prizeModeId": "2",
          "minSeries": 2000,
          "maxSeries": 2020,
          "maxBetSeries": 2010
        }, {
          "gameGroupCode": "11X5",
          "prizeModeId": "1",
          "minSeries": 1660,
          "maxSeries": 1916,
          "maxBetSeries": 1910
        }, {
          "gameGroupCode": "LF",
          "prizeModeId": "1",
          "minSeries": 1660,
          "maxSeries": 1916,
          "maxBetSeries": 1910
        }, {
          "gameGroupCode": "PK10",
          "prizeModeId": "1",
          "minSeries": 1440,
          "maxSeries": 1948,
          "maxBetSeries": 1940
        }]
      };

      _axios2.default.post(lgwUrl, data, { headers: { Merchant: Merchant } }).then(function () {
        console.log('login lgw done.');
      }).catch(function (e) {
        console.log('login lgw failed.', e);
      });
    };

    var data = { customerName: customerName, password: password };
    _axios2.default.post(ussUrl, data).then(function (response) {
      var token = response.data.token;
      var id = response.data.user.customerId;
      var merchant = response.data.user.merchantModel.merchantCode;

      _jsCookie2.default.set('token', token);
      _jsCookie2.default.set('merchant', merchant);

      loginLgw(id, token);

      console.log('login uss done.');
    }).catch(function (e) {
      console.log('login uss failed.', e);
    });
  }
};

function getToken() {
  return _jsCookie2.default.get('token');
}

function getMerchant() {
  return _jsCookie2.default.get('merchant');
}

function getHeader() {
  return { Authorization: getToken(), Merchant: getMerchant() };
}

function splitWinNo() {
  var winNo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var separator = '';
  if (('' + winNo).indexOf(',') !== -1) {
    separator = ',';
  }
  return ('' + winNo).split(separator);
}
window.TCG = TCG;