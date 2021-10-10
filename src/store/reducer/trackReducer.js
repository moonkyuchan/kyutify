import { TRACK } from "../action";

const INITIAL_TRACK = [];

const trackReducer = (state = INITIAL_TRACK, action) => {
  switch (action.type) {
    case TRACK:
      return action.payload;
    default:
      return state;
  }
};

export default trackReducer;
