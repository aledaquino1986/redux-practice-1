import React from "react";
import { connect } from "react-redux";
import { buyCookies } from "../redux/index";

const Cookiesontainer = ({ numOfCookies, buyCookies }) => {
  return (
    <div>
      <h2>Cookies: {numOfCookies}</h2>
      <button onClick={buyCookies}>Buy cookies</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfCookies: state.cookies.numOfCookies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCookies: () => dispatch(buyCookies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cookiesontainer);
