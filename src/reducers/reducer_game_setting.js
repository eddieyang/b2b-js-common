import { FETCH_GAME_SETTING } from "../src/actions/index";

import _ from 'lodash-compat';

const INIT_STATE = {
  bettingModes: []
};
export default function (state = INIT_STATE, action) {

  switch (action.type) {
    case FETCH_GAME_SETTING:
      if (action.payload.data) {
        const bettingModes = _.sortByOrder(action.payload.data.bettingModes, ['unit'], ['desc']);
        return { ...action.payload.data, bettingModes };
      }
  }

  return state;
}