import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";

import cakeReducer from "./cake/cakeReducer";
import { iceCreamReducer } from "./iceCream/iceCreamReducer";

const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

//add logger middleware - logs information related to redux
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(logger))
); //provide this store to react with Provider component

export default store;
