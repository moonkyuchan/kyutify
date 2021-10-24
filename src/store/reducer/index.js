import { combineReducers } from "redux";
import tokenReducer from "./tokenReducer";
import trackReducer from "./trackReducer";
import likeReducer from "./likeReducer";

export default combineReducers({ tokenReducer, trackReducer, likeReducer });
