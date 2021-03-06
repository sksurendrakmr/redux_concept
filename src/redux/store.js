import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import cakeReducer from "./cake/cakeReducer";
import { iceCreamReducer } from "./iceCream/iceCreamReducer";
import { userReducer } from "./user/userReducer";

const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

//add logger middleware - logs information related to redux
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
); //provide this store to react with Provider component

export default store;
