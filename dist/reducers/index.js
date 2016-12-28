"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonReducer = undefined;

var _reducer_games = require("./reducer_games");

var _reducer_games2 = _interopRequireDefault(_reducer_games);

var _reducer_draw = require("./reducer_draw");

var _reducer_draw2 = _interopRequireDefault(_reducer_draw);

var _reducer_game_numero = require("./reducer_game_numero");

var _reducer_game_numero2 = _interopRequireDefault(_reducer_game_numero);

var _reducer_active_game = require("./reducer_active_game");

var _reducer_active_game2 = _interopRequireDefault(_reducer_active_game);

var _reducer_play_menu = require("./reducer_play_menu");

var _reducer_play_menu2 = _interopRequireDefault(_reducer_play_menu);

var _reducer_hot_gap = require("./reducer_hot_gap");

var _reducer_hot_gap2 = _interopRequireDefault(_reducer_hot_gap);

var _reducer_series = require("./reducer_series");

var _reducer_series2 = _interopRequireDefault(_reducer_series);

var _reducer_active_play_menu = require("./reducer_active_play_menu");

var _reducer_active_play_menu2 = _interopRequireDefault(_reducer_active_play_menu);

var _reducer_game_setting = require("./reducer_game_setting");

var _reducer_game_setting2 = _interopRequireDefault(_reducer_game_setting);

var _reducer_player_bet_setting = require("./reducer_player_bet_setting");

var _reducer_player_bet_setting2 = _interopRequireDefault(_reducer_player_bet_setting);

var _reducer_orders = require("./reducer_orders");

var _reducer_orders2 = _interopRequireDefault(_reducer_orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commonReducer = exports.commonReducer = {
  games: _reducer_games2.default,
  activeGame: _reducer_active_game2.default,
  gameSetting: _reducer_game_setting2.default,
  draw: _reducer_draw2.default,
  gameNumero: _reducer_game_numero2.default,
  playMenu: _reducer_play_menu2.default,
  activePlayMenu: _reducer_active_play_menu2.default,
  hotGap: _reducer_hot_gap2.default,
  series: _reducer_series2.default,
  playerBetSetting: _reducer_player_bet_setting2.default,
  orders: _reducer_orders2.default
};