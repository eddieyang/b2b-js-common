import { TOGGLE_GAP, TOGGLE_HOT, FETCH_HOT_GAP } from "../actions/index";
import _ from 'lodash-compat';

const INIT_STATE = {
  gameId: null,
  hot: false,
  gap: true,
  info: {}
};

const DIGIT = {
  FIRST: '1',
  SECOND: '2',
  THIRD: '3',
  FOURTH: '4',
  FIFTH: '5',
  SIXTH: '6',
  SEVENTH: '7',
  EIGHTH: '8',
  NINTH: '9',
  TENTH: '10'
};

export default function (state = INIT_STATE, action) {

  switch (action.type) {
    case TOGGLE_GAP:
      return { ...state, hot: false, gap: true };
    case TOGGLE_HOT:
      return { ...state, hot: true, gap: false };
    case FETCH_HOT_GAP:
      if (action.payload.data) {
        const gap = _.reduce(action.payload.data.gap, (result, n, key) => {
          return { ...result, [DIGIT[key]]: n };
        }, {});
        const hot = _.reduce(action.payload.data.hot, (result, n, key) => {
          return { ...result, [DIGIT[key]]: n };
        }, {});
        return { ...state, info: { gap, hot } };
      }
  }

  return state
}