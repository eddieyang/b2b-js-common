'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INIT_STATE;
  var action = arguments[1];


  var amount = 0;

  switch (action.type) {

    case _index.BET_FINISH:
    case _index.PLAY_MENU_SELECTED:
      // 重新選擇玩法重置金額
      return state.set('stakes', 0).set('amount', 0).set('ballRows', []);

    case _index.CHANGE_SERIES:
      var series = action.payload;
      return state.set('series', series);

    case _index.CHANGE_BET_MODE:
      var mode = action.payload;
      amount = state.get('singleBetPrice') * state.get('multiple') * mode.unit * state.get('stakes');
      return state.set('mode', mode).set('amount', amount);

    case _index.CHANGE_BET_MULTIPLE:
      var multiple = parseInt(action.payload);
      amount = state.get('singleBetPrice') * multiple * state.get('mode').unit * state.get('stakes');
      return state.set('multiple', multiple).set('amount', amount);

    case _index.CALCULATE_STAKES:
      var playId = action.payload.playMenu.playId;
      var singleBetPrice = action.payload.playMenu.singleBetPrice;
      if (!_ball_board_config.ballBoardConfig[playId]) {
        // no config
        return state.set('stakes', 0);
      }

      var formula = _ball_board_config.ballBoardConfig[playId].get('formula');
      var ballRows = action.payload.ballRows;
      var stakes = _stakes_calculator2.default[formula](ballRows);
      amount = singleBetPrice * state.get('multiple') * state.get('mode').unit * stakes;
      return state.set('singleBetPrice', singleBetPrice).set('stakes', stakes).set('amount', amount).set('ballRows', ballRows);

  }

  return state;
};

var _index = require('../src/actions/index');

var _stakes_calculator = require('../utils/stakes_calculator');

var _stakes_calculator2 = _interopRequireDefault(_stakes_calculator);

var _ball_board_config = require('../configs/ball_board_config');

var _immutable = require('immutable');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var INIT_STATE = (0, _immutable.Map)({}).set('multiple', 1).set('stakes', 0).set('amount', 0).set('ballRows', []);