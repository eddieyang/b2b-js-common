import { CHANGE_SERIES, CHANGE_BET_MODE, CHANGE_BET_MULTIPLE, CALCULATE_STAKES, PLAY_MENU_SELECTED, BET_FINISH } from "../actions/index";
import StakesCalculator from '../utils/stakes_calculator';
import { ballBoardConfig } from '../configs/ball_board_config';

import { Map } from 'immutable';

const INIT_STATE = Map({})
  .set('multiple', 1)
  .set('stakes', 0)
  .set('amount', 0)
  .set('ballRows', []);

export default function (state = INIT_STATE, action) {

  let amount = 0;

  switch (action.type) {

    case BET_FINISH:
    case PLAY_MENU_SELECTED: // 重新選擇玩法重置金額
      return state.set('stakes', 0).set('amount', 0).set('ballRows', []);

    case CHANGE_SERIES:
      const series = action.payload;
      return state.set('series', series);

    case CHANGE_BET_MODE:
      const mode = action.payload;
      amount = state.get('singleBetPrice') * state.get('multiple') * mode.unit * state.get('stakes');
      return state.set('mode', mode).set('amount', amount);

    case CHANGE_BET_MULTIPLE:
      const multiple = parseInt(action.payload);
      amount = state.get('singleBetPrice') * multiple * state.get('mode').unit * state.get('stakes');
      return state.set('multiple', multiple).set('amount', amount);

    case CALCULATE_STAKES:
      const playId = action.payload.playMenu.playId;
      const singleBetPrice = action.payload.playMenu.singleBetPrice;
      if (!ballBoardConfig[playId]) { // no config
        return state.set('stakes', 0);
      }

      const formula = ballBoardConfig[playId].get('formula');
      const ballRows = action.payload.ballRows;
      const stakes = StakesCalculator[formula](ballRows);
      amount = singleBetPrice * state.get('multiple') * state.get('mode').unit * stakes;
      return state.set('singleBetPrice', singleBetPrice).set('stakes', stakes).set('amount', amount).set('ballRows', ballRows);

  }

  return state
}