import { BUY_CROISSANTS } from "./croissantTypes";

const initialState = {
  numOfCroissants: 12
};

const croissantReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CROISSANTS:
      return {
        ...state,
        numOfCroissants: state.numOfCroissants - 1
      };

    default:
      return state;
  }
};

export default croissantReducer;
