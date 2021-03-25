import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/index";

const IceCreamContainer = ({ numOfIceCreams, buyIceCream }) => {
  return (
    <div>
      <h2>Number of ice-creams: {numOfIceCreams}</h2>
      <button onClick={buyIceCream}>buy ice cream</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
