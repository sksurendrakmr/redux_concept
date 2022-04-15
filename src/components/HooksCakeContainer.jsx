import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

/**
 * useSelector
 * ==============
 *  useSelector hooks -> Provided by react-redux which is close equivalentthe mapStateToProps.
    Thus to get hold of any state that is maintained in the redux store, we use useSelector.

    useSelector hooks accepts a function as a parameter and the function is called as selector function.
    This selector function receives the redux state as its argument.

    =================

    useDispatch
    ==============
    - Used to dipatch an action with react-redux
    - Return a reference to the dispatch function from the redux store.
 */
export const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
};
