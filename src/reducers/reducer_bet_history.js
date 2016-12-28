import { FETCH_BET_HISTORY } from '../actions/index';

const INIT_STATE = {};

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    //TODO Test
    case FETCH_BET_HISTORY:
      if (action.payload.data) {
        const state = action.payload.data;
        return state;
      }

  }
  return state;
}