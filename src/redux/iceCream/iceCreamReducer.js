import { BUY_ICECREAM } from "./iceCreamTypes";

const initalState = {
  numOfIceCream: 20,
};

export const iceCreamReducer = (state = initalState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIceCream: state.numOfIceCream - 1 };
    default:
      return state;
  }
};
