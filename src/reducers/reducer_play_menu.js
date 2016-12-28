import { FETCH_PLAY_MENU, GAME_SELECTED } from "../src/actions/index";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_PLAY_MENU:
      if (action.payload.data) {
        return action.payload.data.reduce((last, playMenus) => {
          if (playMenus.playMenuGroups.length) {
            return { ...last, [playMenus.prizeModeId]: playMenus }
          }
          return last;
        }, {});
      }
      break;
    case GAME_SELECTED:
      return {};
  }

  return state
}