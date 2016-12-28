import { FETCH_DRAW, ADD_DRAW } from "../actions/index";

const INIT_STATE = [];
export default function (state = INIT_STATE, action) {

  switch (action.type) {
    case FETCH_DRAW:
      if (action.payload.data) {
        return action.payload.data.content || INIT_STATE;
      }
    case ADD_DRAW:
      const { gameCode, numero, winningNumber: winNo } = action.payload;
      if (state.length && state[0].gameCode === gameCode) {
        return [{ gameCode, numero, winNo }, ...state];
      }
  }

  return state
}