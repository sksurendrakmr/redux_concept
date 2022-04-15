import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";

const store = createStore(cakeReducer); //provide this store to react with Provider component

export default store;
