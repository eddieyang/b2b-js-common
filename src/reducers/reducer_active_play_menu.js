import { PLAY_MENU_SELECTED } from "../src/actions/index";
export default function (state = {}, action) {

  switch (action.type) {
    case PLAY_MENU_SELECTED:
      console.log('PLAY_MENU_SELECTED', action.payload.playId, action.payload.playCode);
      return action.payload;
  }

  return state
}