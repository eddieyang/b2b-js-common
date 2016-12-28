import GameReducer from "./reducer_games";
import DrawReducer from "./reducer_draw";
import GameNumeroReducer from "./reducer_game_numero";
import ActiveGame from "./reducer_active_game";
import PlayMenuReducer from "./reducer_play_menu";
import HotGapReducer from "./reducer_hot_gap";
import SeriesReducer from "./reducer_series";
import ActivePlayMenu from "./reducer_active_play_menu";
import GameSettingReducer from "./reducer_game_setting";
import PlayerBetSetting from "./reducer_player_bet_setting";
import OrderReducer from "./reducer_orders";

export const commonReducer = {
  games: GameReducer,
  activeGame: ActiveGame,
  gameSetting: GameSettingReducer,
  draw: DrawReducer,
  gameNumero: GameNumeroReducer,
  playMenu: PlayMenuReducer,
  activePlayMenu: ActivePlayMenu,
  hotGap: HotGapReducer,
  series: SeriesReducer,
  playerBetSetting: PlayerBetSetting,
  orders: OrderReducer
};
