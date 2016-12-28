'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADD_TO_SHOPPING_CART = exports.ONE_CLICK_BET = exports.BET_FINISH = exports.CALCULATE_STAKES = exports.CHANGE_BET_MULTIPLE = exports.CHANGE_BET_MODE = exports.CHANGE_SERIES = exports.FETCH_GAME_SETTING = exports.FETCH_SERIES = exports.FETCH_HOT_GAP = exports.TOGGLE_GAP = exports.TOGGLE_HOT = exports.PLAY_MENU_SELECTED = exports.FETCH_PLAY_MENU = exports.FETCH_GAME_NUMERO = exports.ADD_DRAW = exports.FETCH_DRAW = exports.PRIZE_MODE_SELECTED = exports.GAME_SELECTED = exports.FETCH_GAMES = undefined;
exports.selectGame = selectGame;
exports.selectPrizeMode = selectPrizeMode;
exports.fetchGames = fetchGames;
exports.fetchDraw = fetchDraw;
exports.addDraw = addDraw;
exports.fetchGameNumero = fetchGameNumero;
exports.fetchPlayMenu = fetchPlayMenu;
exports.selectPlayMenu = selectPlayMenu;
exports.toggleHot = toggleHot;
exports.toggleGap = toggleGap;
exports.fetchHotGap = fetchHotGap;
exports.fetchSeries = fetchSeries;
exports.fetchGameSetting = fetchGameSetting;
exports.changeSeries = changeSeries;
exports.changeBetMode = changeBetMode;
exports.changeBetMultiple = changeBetMultiple;
exports.calculateStakes = calculateStakes;
exports.betFinish = betFinish;
exports.oneClickBet = oneClickBet;
exports.addToShoppingCart = addToShoppingCart;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_GAMES = exports.FETCH_GAMES = 'FETCH_GAMES';
var GAME_SELECTED = exports.GAME_SELECTED = 'GAME_SELECTED';
var PRIZE_MODE_SELECTED = exports.PRIZE_MODE_SELECTED = 'PRIZE_MODE_SELECTED';

var FETCH_DRAW = exports.FETCH_DRAW = 'FETCH_DRAW';
var ADD_DRAW = exports.ADD_DRAW = 'ADD_DRAW';

var FETCH_GAME_NUMERO = exports.FETCH_GAME_NUMERO = 'FETCH_GAME_NUMERO';
var FETCH_PLAY_MENU = exports.FETCH_PLAY_MENU = 'FETCH_PLAY_MENU';
var PLAY_MENU_SELECTED = exports.PLAY_MENU_SELECTED = 'PLAY_MENU_SELECTED';

var TOGGLE_HOT = exports.TOGGLE_HOT = 'TOGGLE_HOT';
var TOGGLE_GAP = exports.TOGGLE_GAP = 'TOGGLE_GAP';
var FETCH_HOT_GAP = exports.FETCH_HOT_GAP = 'FETCH_HOT_GAP';

var FETCH_SERIES = exports.FETCH_SERIES = 'FETCH_SERIES';
var FETCH_GAME_SETTING = exports.FETCH_GAME_SETTING = 'FETCH_GAME_SETTING';

// bet toolbar action
var CHANGE_SERIES = exports.CHANGE_SERIES = 'CHANGE_SERIES';
var CHANGE_BET_MODE = exports.CHANGE_BET_MODE = 'CHANGE_BET_MODE';
var CHANGE_BET_MULTIPLE = exports.CHANGE_BET_MULTIPLE = 'CHANGE_BET_MULTIPLE';
var CALCULATE_STAKES = exports.CALCULATE_STAKES = 'CALCULATE_STAKES';
var BET_FINISH = exports.BET_FINISH = 'BET_FINISH';

var ONE_CLICK_BET = exports.ONE_CLICK_BET = 'ONE_CLICK_BET';
var ADD_TO_SHOPPING_CART = exports.ADD_TO_SHOPPING_CART = 'ADD_TO_SHOPPING_CART';

function selectGame(game) {
  return {
    type: GAME_SELECTED,
    payload: game
  };
}

function selectPrizeMode(prizeModeId) {
  return {
    type: PRIZE_MODE_SELECTED,
    payload: prizeModeId
  };
}

function fetchGames() {

  var request = _axios2.default.get(_common.baseDomain + '/lgw/games', { headers: (0, _common.getHeader)() });

  return {
    type: FETCH_GAMES,
    payload: request
  };
}

function fetchDraw(_ref) {
  var gameId = _ref.gameId;


  var request = _axios2.default.get(_common.baseDomain + '/lgw/draw/' + gameId + '?page=0&size=10', { headers: (0, _common.getHeader)() });

  return {
    type: FETCH_DRAW,
    payload: request
  };
}

function addDraw(_ref2) {
  var gameCode = _ref2.gameCode,
      numero = _ref2.numero,
      winningNumber = _ref2.winningNumber;


  return {
    type: ADD_DRAW,
    payload: { gameCode: gameCode, numero: numero, winningNumber: winningNumber }
  };
}

function fetchGameNumero(_ref3) {
  var gameId = _ref3.gameId;


  var request = _axios2.default.get(_common.baseDomain + '/lgw/numeros/near?gameId=' + gameId, { headers: (0, _common.getHeader)() });

  return {
    type: FETCH_GAME_NUMERO,
    payload: request
  };
}

function fetchPlayMenu(_ref4) {
  var gameId = _ref4.gameId;


  var request = _axios2.default.get(_common.baseDomain + '/lgw/games/' + gameId + '/play_menu', { headers: (0, _common.getHeader)() });

  return {
    type: FETCH_PLAY_MENU,
    payload: request
  };
}

function selectPlayMenu(play) {

  return {
    type: PLAY_MENU_SELECTED,
    payload: play
  };
}

function toggleHot() {
  return {
    type: TOGGLE_HOT
  };
}

function toggleGap() {
  return {
    type: TOGGLE_GAP
  };
}

function fetchHotGap(_ref5) {
  var gameId = _ref5.gameId;


  var request = _axios2.default.get(_common.baseDomain + '/lgw/draw/' + gameId + '/hot_gap_info', { headers: (0, _common.getHeader)() });

  return {
    type: FETCH_HOT_GAP,
    payload: request
  };
}

function fetchSeries() {

  var request = _axios2.default.get(_common.baseDomain + '/lgw/customers/series', { headers: (0, _common.getHeader)() });

  return {
    type: FETCH_SERIES,
    payload: request
  };
}

function fetchGameSetting(_ref6) {
  var gameId = _ref6.gameId;


  var request = _axios2.default.get(_common.baseDomain + '/lgw/games/' + gameId + '/setting', { headers: (0, _common.getHeader)() });

  return {
    type: FETCH_GAME_SETTING,
    payload: request
  };
}

function changeSeries() {
  var series = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;


  return {
    type: CHANGE_SERIES,
    payload: series
  };
}

function changeBetMode() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


  return {
    type: CHANGE_BET_MODE,
    payload: mode
  };
}

function changeBetMultiple(multiple) {
  return {
    type: CHANGE_BET_MULTIPLE,
    payload: multiple
  };
}

function calculateStakes() {
  var playMenu = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var ballRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];


  return {
    type: CALCULATE_STAKES,
    payload: {
      playMenu: playMenu,
      ballRows: ballRows
    }
  };
}

function betFinish() {

  return {
    type: BET_FINISH
  };
}

function oneClickBet(_ref7) {
  var game = _ref7.game,
      currentNumero = _ref7.currentNumero,
      playMenu = _ref7.playMenu,
      prizeModeId = _ref7.prizeModeId,
      series = _ref7.series,
      mode = _ref7.mode,
      multiple = _ref7.multiple,
      amount = _ref7.amount,
      ballRows = _ref7.ballRows;


  var gameId = game.gameId;
  var winningStop = false;
  var abandoning = false;
  var betCartAmountSum = (0, _numeral2.default)(amount).format('0.0000');
  var chase = false;
  var device = 'WEB';
  var orderType = 1;
  var quickChase = false;
  var playId = playMenu.playId;

  var ballString = ballRows.map(function (row) {
    return row.join('');
  }).join('_');
  var bettingSlipString = ballString + '~1~' + playId + '~' + mode + '~' + series + '~' + multiple;

  var data = {
    gameId: gameId,
    currentNumero: currentNumero,
    winningStop: winningStop,
    abandoning: abandoning,
    betCartAmountSum: betCartAmountSum,
    chase: chase,
    device: device,
    orderType: orderType,
    quickChase: quickChase,
    prizeModeId: prizeModeId,
    bettingSlipString: bettingSlipString
  };
  var request = _axios2.default.post(_common.baseDomain + '/lgw/orders/betting', data, { headers: (0, _common.getHeader)() });
  return {
    type: ONE_CLICK_BET,
    payload: request
  };
}

// TODO ssc or 11x5 球號顯示格式
function addToShoppingCart(_ref8) {
  var series = _ref8.series,
      playMenu = _ref8.playMenu,
      mode = _ref8.mode,
      multiple = _ref8.multiple,
      ballRows = _ref8.ballRows,
      stakes = _ref8.stakes,
      amount = _ref8.amount;


  var playId = playMenu.playId;

  var ballString = ballRows.map(function (row) {
    return row.join('');
  }).join('_');
  var bettingSlipString = ballString + '~1~' + playId + '~' + mode + '~' + series + '~' + multiple;

  var ballText = ballRows.map(function (row) {
    return row.join('');
  }).join(' | ');

  var orderItem = {
    playMenu: playMenu, mode: mode, multiple: multiple, ballRows: ballRows, stakes: stakes, amount: amount, ballText: ballText, bettingSlipString: bettingSlipString
  };

  return {
    type: ADD_TO_SHOPPING_CART,
    payload: orderItem
  };
}