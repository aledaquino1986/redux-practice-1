import { BUY_ALFAJORES } from "./alfajoresTypes";

const initialState = {
  numOfAlfajores: 100
};

const alfajoresReducers = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ALFAJORES:
      return {
        ...state,
        numOfAlfajores: state.numOfAlfajores - 1
      };

    default:
      return state;
  }
};

export default alfajoresReducers;
