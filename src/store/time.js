/**
 * ACTION TYPES
 */
const UPDATE_TIME = 'UPDATE_TIME'

/**
 * INITIAL STATE
 */
const INITIAL_STATE = null

/**
 * ACTION CREATORS
 */

export const updateTime = (time) => ({
   type: UPDATE_TIME,
   time
 })

 /**
 * REDUCER
 */

export default function timeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_TIME:
      return action.time;
    default:
      return state;
  }
}
