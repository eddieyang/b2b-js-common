import axios from 'axios';
import numeral from "numeral";

import { baseDomain } from '../common';
import { getHeader } from '../common';

export const FETCH_GAMES = 'FETCH_GAMES';
export const GAME_SELECTED = 'GAME_SELECTED';
export const PRIZE_MODE_SELECTED = 'PRIZE_MODE_SELECTED';

export const FETCH_DRAW = 'FETCH_DRAW';
export const ADD_DRAW = 'ADD_DRAW';

export const FETCH_GAME_NUMERO = 'FETCH_GAME_NUMERO';
export const FETCH_PLAY_MENU = 'FETCH_PLAY_MENU';
export const PLAY_MENU_SELECTED = 'PLAY_MENU_SELECTED';

export const TOGGLE_HOT = 'TOGGLE_HOT';
export const TOGGLE_GAP = 'TOGGLE_GAP';
export const FETCH_HOT_GAP = 'FETCH_HOT_GAP';

export const FETCH_SERIES = 'FETCH_SERIES';
export const FETCH_GAME_SETTING = 'FETCH_GAME_SETTING';

// bet toolbar action
export const CHANGE_SERIES = 'CHANGE_SERIES';
export const CHANGE_BET_MODE = 'CHANGE_BET_MODE';
export const CHANGE_BET_MULTIPLE = 'CHANGE_BET_MULTIPLE';
export const CALCULATE_STAKES = 'CALCULATE_STAKES';
export const BET_FINISH = 'BET_FINISH';

export const ONE_CLICK_BET = 'ONE_CLICK_BET';
export const ADD_TO_SHOPPING_CART = 'ADD_TO_SHOPPING_CART';

export function selectGame(game) {
  return {
    type: GAME_SELECTED,
    payload: game
  };
}

export function selectPrizeMode(prizeModeId) {
  return {
    type: PRIZE_MODE_SELECTED,
    payload: prizeModeId
  };
}

export function fetchGames() {

  const request = axios.get(`${baseDomain}/lgw/games`, { headers: getHeader() });

  return {
    type: FETCH_GAMES,
    payload: request
  };
}

export function fetchDraw({ gameId }) {

  const request = axios.get(`${baseDomain}/lgw/draw/${gameId}?page=0&size=10`, { headers: getHeader() });

  return {
    type: FETCH_DRAW,
    payload: request
  };
}

export function addDraw({ gameCode, numero, winningNumber }) {

  return {
    type: ADD_DRAW,
    payload: { gameCode, numero, winningNumber }
  };
}

export function fetchGameNumero({ gameId }) {

  const request = axios.get(`${baseDomain}/lgw/numeros/near?gameId=${gameId}`, { headers: getHeader() });

  return {
    type: FETCH_GAME_NUMERO,
    payload: request
  };
}

export function fetchPlayMenu({ gameId }) {

  const request = axios.get(`${baseDomain}/lgw/games/${gameId}/play_menu`, { headers: getHeader() });

  return {
    type: FETCH_PLAY_MENU,
    payload: request
  };
}

export function selectPlayMenu(play) {

  return {
    type: PLAY_MENU_SELECTED,
    payload: play
  };
}


export function toggleHot() {
  return {
    type: TOGGLE_HOT
  };
}

export function toggleGap() {
  return {
    type: TOGGLE_GAP
  };
}

export function fetchHotGap({ gameId }) {

  const request = axios.get(`${baseDomain}/lgw/draw/${gameId}/hot_gap_info`, { headers: getHeader() });

  return {
    type: FETCH_HOT_GAP,
    payload: request
  };
}


export function fetchSeries() {

  const request = axios.get(`${baseDomain}/lgw/customers/series`, { headers: getHeader() });

  return {
    type: FETCH_SERIES,
    payload: request
  };
}

export function fetchGameSetting({ gameId }) {

  const request = axios.get(`${baseDomain}/lgw/games/${gameId}/setting`, { headers: getHeader() });

  return {
    type: FETCH_GAME_SETTING,
    payload: request
  };
}

export function changeSeries(series = 0) {

  return {
    type: CHANGE_SERIES,
    payload: series
  };
}

export function changeBetMode(mode = {}) {

  return {
    type: CHANGE_BET_MODE,
    payload: mode
  };
}

export function changeBetMultiple(multiple) {
  return {
    type: CHANGE_BET_MULTIPLE,
    payload: multiple
  };
}

export function calculateStakes(playMenu = {}, ballRows = []) {

  return {
    type: CALCULATE_STAKES,
    payload: {
      playMenu,
      ballRows
    }
  };
}

export function betFinish() {

  return {
    type: BET_FINISH
  };
}

export function oneClickBet({ game, currentNumero, playMenu, prizeModeId, series, mode, multiple, amount, ballRows }) {

  const gameId = game.gameId;
  const winningStop = false;
  const abandoning = false;
  const betCartAmountSum = numeral(amount).format('0.0000');
  const chase = false;
  const device = 'WEB';
  const orderType = 1;
  const quickChase = false;
  const playId = playMenu.playId;

  const ballString = ballRows.map((row) => {
    return row.join('')
  }).join('_');
  const bettingSlipString = `${ballString}~1~${playId}~${mode}~${series}~${multiple}`;

  const data = {
    gameId,
    currentNumero,
    winningStop,
    abandoning,
    betCartAmountSum,
    chase,
    device,
    orderType,
    quickChase,
    prizeModeId,
    bettingSlipString
  };
  const request = axios.post(`${baseDomain}/lgw/orders/betting`, data, { headers: getHeader() });
  return {
    type: ONE_CLICK_BET,
    payload: request
  };
}

// TODO ssc or 11x5 球號顯示格式
export function addToShoppingCart({ series, playMenu, mode, multiple, ballRows, stakes, amount }) {

  const playId = playMenu.playId;

  const ballString = ballRows.map((row) => {
    return row.join('')
  }).join('_');
  const bettingSlipString = `${ballString}~1~${playId}~${mode}~${series}~${multiple}`;

  const ballText = ballRows.map((row) => {
    return row.join('')
  }).join(' | ');

  const orderItem = {
    playMenu, mode, multiple, ballRows, stakes, amount, ballText, bettingSlipString
  };

  return {
    type: ADD_TO_SHOPPING_CART,
    payload: orderItem
  };
}