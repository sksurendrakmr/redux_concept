import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

//redux Hooks allow us to subscribe to the redux store and dispatch actions without wrapping the component with connect()
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
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
//conect -> connect with the redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
