import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

export const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={() => props.buyCake()}>Buy cake</button>
    </div>
  );
};

//Get hold of redux state and how to dispatch an action from within react component
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
