import { createStore } from "react=redux";
import todoReducer from "./reducers";
const store = createStore(todoReducer);

export default store;
