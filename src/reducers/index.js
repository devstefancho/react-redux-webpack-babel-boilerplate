import ExampleReducer from "./ExampleReducer";
import { combineReducers } from "redux";
import ExampleFetchReducer from "./ExampleFetchReducer";

const rootReducer = combineReducers({
  ExampleReducer,
  ExampleFetchReducer,
});

export default rootReducer;
