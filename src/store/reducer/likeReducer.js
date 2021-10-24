import { LIKE } from "../action";

const INITIAL_STATE = [];

const likeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIKE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default likeReducer;
