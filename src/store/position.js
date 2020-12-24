
/**
 * ACTION TYPES
 */
const GET_POSITION = 'GET_POSITION'
const UPDATE_POSITION = 'UPDATE_POSITION'

/**
 * INITIAL STATE
 */
const INITIAL_STATE = {}

/**
 * ACTION CREATORS
 */

export const getPosition = (position) => ({
   type: GET_POSITION,
   position
 })

 /**
 * REDUCER
 */

export default function leaderboardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_POSITION:
      return action.position;
    default:
      return state;
  }
}
