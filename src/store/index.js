import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import gameState from "./gameState";
import leaderboard from "./leaderboard";
import position from "./position";
import time from "./time";
import { reduxFirestore, getFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "../firebase";

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
