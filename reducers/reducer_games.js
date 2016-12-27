import { FETCH_GAMES } from "../actions/index";

const INIT_STATE = [];
export default function (state = INIT_STATE, action) {

  switch (action.type) {
    case FETCH_GAMES:
      if (action.payload.data) {
        const gameGroups = action.payload.data.map((gameGroup) => {
          const gamesWithGroupCode = gameGroup.games.map((game) => {
            return { gameGroupCode: gameGroup.code, ...game };
          });
          return { ...gameGroup, games: gamesWithGroupCode };
        });

        return gameGroups;
      }
  }

  return state
}