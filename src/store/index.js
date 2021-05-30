import { combineReducers, createStore } from "redux";
import userReducer from "./user/reducer";
import postReducer from "./posts/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const store = createStore(
  combineReducers({
    user: userReducer,
    posts: postReducer,
  }),
  enhancer
);

export default store;
