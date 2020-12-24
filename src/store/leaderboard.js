import firebase from '../firebase';

// Inititializing firebase database
// Saving reference to leaderboard table
const db = firebase.firestore();
const leaderboardRef = db.collection('leaderboard')

/**
 * ACTION TYPES
 */
const GET_LEADERBOARD = 'GET_LEADERBOARD';
const ADD_TO_LEADERBOARD = 'ADD_TO_LEADERBOARD';

/**
 * INITIAL STATE
 */
const INITIAL_STATE = [];

/**
 * ACTION CREATORS
 */
const getLeaderboard = (leaderboard) => ({
  type: GET_LEADERBOARD,
  leaderboard,
});

const addToLeaderboard = (newRecord) => ({
  type: ADD_TO_LEADERBOARD,
  newRecord,
});

/**
 * THUNK CREATORS
 */
export const fetchLeaderboard = () => async (dispatch) => {
  try {
    const data = await leaderboardRef.orderBy('score').get();
    const leaderboard = data.docs.map(doc => doc.data());
    dispatch(getLeaderboard(leaderboard));
  } catch (error) {
    console.log(error)
  }
};

export const addRecordToDb = (newRecord) => async (dispatch) => {
  try {
    const scoreRef = leaderboardRef.doc()
    const scoreData = await scoreRef.set(newRecord)
    // console.log('scoreData', scoreData.doc.data())
    // dispatch(addToLeaderboard(scoreData.data()));
  } catch (error) {
    console.log(error);
  }
};

/**
 * REDUCER
 */
export default function leaderboardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_LEADERBOARD:
      return action.leaderboard;
    case ADD_TO_LEADERBOARD:
      return [...state, action.newRecord];
    default:
      return state;
  }
}
