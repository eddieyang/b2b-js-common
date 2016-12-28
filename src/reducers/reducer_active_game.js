import { GAME_SELECTED, PRIZE_MODE_SELECTED } from "../actions/index";

const INIT_STATE = {
  game: {},
  prizeModeId: 1
};

export default function (state = INIT_STATE, action) {

  switch (action.type) {
    case GAME_SELECTED:
      if (action.payload) {
        const game = action.payload;
        return { ...state, game };
      }
      break;

    case PRIZE_MODE_SELECTED:
      if (action.payload) {
        const prizeModeId = action.payload;
        return { ...state, prizeModeId };
      }
      break;
  }

  return state
}