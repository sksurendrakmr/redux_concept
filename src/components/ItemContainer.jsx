import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

//Here we want to display either the number of cakes or iceCream based
//on the props that will pass from the parent component.
export const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={() => props.buyItem()}>Buy Items</button>
    </div>
  );
};

/**
 *
 * @param {} state - redux state
 * @param {} ownProps - few own props that component has that we can make use of
 */
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numOfIceCream;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
