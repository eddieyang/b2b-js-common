import { ONE_CLICK_BET, FETCH_BET_HISTORY, CANCEL_BET_ORDER } from "../actions/index";

const INIT_STATE = {};

export default function (state = INIT_STATE, action) {

  switch (action.type) {
    case ONE_CLICK_BET:
      break;
    case FETCH_BET_HISTORY:
      if (action.payload.data) {
        return { ...state, betHistory: action.payload.data };
      }
      break;
    case CANCEL_BET_ORDER:
      if (action.payload.data) {
        return { ...state, cancelResult: action.payload.data };
      }
      break;
  }

  return state;
}