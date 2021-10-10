import { combineReducers } from "redux";
import tokenReducer from "./tokenReducer";
import trackReducer from "./trackReducer";

export default combineReducers({ tokenReducer, trackReducer });
