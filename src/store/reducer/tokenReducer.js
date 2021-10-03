import { TOKEN } from "../action";

const INITIAL_STATE = "";
const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOKEN:
      return action.payload;
    default:
      return state;
  }
};

export default tokenReducer;
