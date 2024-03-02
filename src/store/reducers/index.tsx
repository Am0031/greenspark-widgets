import { combineReducers } from "redux";
import widgets from "./widgetsSlice";

const reducers = combineReducers({
  widgets,
  //other reducers for future extensions
});

export default reducers;
