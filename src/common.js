import Cookies from 'js-cookie';
import axios from 'axios';

export const apiPath = '/api';

let TCG = {

  login (customerName, password) {

    const ussUrl = `${apiPath}/uss/customer_sessions`;
    const lgwUrl = `${apiPath}/lgw/sessions`;
    const Merchant = '2000cai';

    const loginLgw = (id, token) => {
      const data = {
        "customerId": `${id}`,
        "token": `${token}`,
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
      }

      axios.post(lgwUrl, data, { headers: { Merchant } }).then(() => {
        console.log('login lgw done.');
      }).catch((e) => {
        console.log('login lgw failed.', e);
      });
    };

    const data = { customerName, password };
    axios.post(ussUrl, data).then((response) => {
      const token = response.data.token;
      const id = response.data.user.customerId;
      const merchant = response.data.user.merchantModel.merchantCode;

      Cookies.set('token', token);
      Cookies.set('merchant', merchant);

      loginLgw(id, token);

      console.log('login uss done.');

    }).catch((e) => {
      console.log('login uss failed.', e);
    });
  }
}

export function getToken() {
  return Cookies.get('token');
}

export function getMerchant() {
  return Cookies.get('merchant');
}

export function getHeader() {
  return { Authorization: getToken(), Merchant: getMerchant() };
}

export function splitWinNo(winNo = '') {
  let separator = '';
  if (`${winNo}`.indexOf(',') !== -1) {
    separator = ',';
  }
  return `${winNo}`.split(separator);
}
window.TCG = TCG;