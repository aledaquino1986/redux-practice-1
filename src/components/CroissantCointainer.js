import React from "react";
import { connect } from "react-redux";
import { buyCroissants } from "../redux/index";

const CroissantCointainer = ({ numOfCroissants, buyCroissants }) => {
  return (
    <div>
      <h2>Croissants: {numOfCroissants}</h2>
      <button onClick={buyCroissants}>Buy a croissant</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfCroissants: state.croissants.numOfCroissants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCroissants: () => dispatch(buyCroissants())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CroissantCointainer);
