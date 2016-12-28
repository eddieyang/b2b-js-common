import { FETCH_SERIES } from "../src/actions/index";
import _ from 'lodash-compat';

const INIT_STATE = [];
export default function (state = INIT_STATE, action) {

  switch (action.type) {

    case FETCH_SERIES:
      if (action.payload.data) {
        return _(action.payload.data).groupBy('gameGroupCode').reduce((last, value, key) => {
          return { ...last, [key]: _.indexBy(value, 'prizeModeId') };
        }, {});
      }
  }

  return state
}