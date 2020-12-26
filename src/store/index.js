import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import gameState from "./gameState";
import leaderboard from "./leaderboard";
import position from "./position";
import time from "./time";

const reducer = combineReducers({
  gameState,
  leaderboard,
  position,
  time,
});
// const middleware = composeWithDevTools(
//   applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
// );
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, middleware);

// const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirestore })),
//     reduxFirestore(firebase)
//   )
// );

export default store;
