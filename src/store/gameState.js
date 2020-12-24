import { calcPosFromAngles } from "@react-three/drei";

/**
 * ACTION TYPES
 */
const GET_GAMESTATE = 'GET_GAMESTATE';
const GAMESTATE_WIN = 'GAMESTATE_WIN';
const GAMESTATE_PLAYING = 'GAMESTATE_PLAYING';
const RESET_GAMESTATE = 'RESET_GAMESTATE';
const RESTART_GAMESTATE = 'RESTART_GAME_STATE'

/**
 * INITIAL STATE
 */

//calculate randomized start/endzone (could be two separate arrays with different combinations)
//eg, if endzone A, then start is A, if enzone B, then start is B.
const INITIAL_STATE = { isPlaying: false, hasWon: false,isPaused: false, courseCompleted: false };

/**
 * ACTION CREATORS
 */

export const getGameState = () => ({
  type: GET_GAMESTATE,
});

export const gameStateWin = (hasWon) => ({
  type: GAMESTATE_WIN,
  hasWon,
});

export const gameStatePlaying = (isPlaying) => ({
  type: GAMESTATE_PLAYING,
  isPlaying,
});

export const resetGameState = () => ({
  type: RESET_GAMESTATE,
});

export const restartGameState = () => ({
  type: RESTART_GAMESTATE
})

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function gameStateReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_GAMESTATE:
      return state;
      case GAMESTATE_WIN:
        return { ...state, hasWon: action.hasWon};
      case GAMESTATE_PLAYING:
        return { ...state, isPlaying: action.isPlaying}
    case RESET_GAMESTATE:
      return { ...state, isPlaying: true, hasWon: false};
    case RESTART_GAMESTATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}
