import React from "react";
import { connect } from "react-redux";
import { buyMuffins } from "../redux/index";

const MuffinsContainer = ({ numOfMuffins, buyMuffins }) => {
  return (
    <div>
      <h2>Muffins: {numOfMuffins}</h2>
      <button onClick={buyMuffins}>Buy Muffins</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfMuffins: state.muffin.numOfMuffins
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyMuffins: () => dispatch(buyMuffins())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MuffinsContainer);
