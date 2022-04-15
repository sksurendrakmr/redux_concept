//In this file, we define action creators

import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (numOfCake = 1) => {
  return {
    type: BUY_CAKE,
    payload: numOfCake,
  };
};
