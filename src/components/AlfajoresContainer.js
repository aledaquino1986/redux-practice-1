import React from "react";
import { connect } from "react-redux";
import { buyAlfajores } from "../redux/index";

const AlfajoresContainer = ({ numOfAlfajores, buyAlfajores }) => {
  return (
    <div>
      <h2>Alfajores: {numOfAlfajores}</h2>
      <button onClick={buyAlfajores}>Buy Alfajores</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfAlfajores: state.alfajores.numOfAlfajores
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyAlfajores: () => dispatch(buyAlfajores())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlfajoresContainer);
