import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/index";

const CakeContainer = ({ numOfCakes, buyCake }) => {
  return (
    <div>
      <h2>Number of cakes: {numOfCakes}</h2>
      <button onClick={buyCake}>buy cake</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
