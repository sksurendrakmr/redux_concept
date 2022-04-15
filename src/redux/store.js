import { combineReducers, createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
import { iceCreamReducer } from "./iceCream/iceCreamReducer";

const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducers); //provide this store to react with Provider component

export default store;
