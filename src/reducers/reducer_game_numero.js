import { FETCH_GAME_NUMERO } from "../actions/index";

export default function (state = {}, action) {


  switch (action.type) {
    case FETCH_GAME_NUMERO:
      return action.payload.data || {};
  }

  return state
}