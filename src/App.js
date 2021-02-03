import React, { Component } from "react";
import { connect } from "react-redux";

function App(props) {
  return (
    <div>
      {props.n}
      <button
        onClick={() => {
          props.add1();
        }}
      >
        +1
      </button>
    </div>
  );
}

function x(state) {
  return {
    n: state.n,
  };
}

function y(dispatch) {
  return {
    add1: () => dispatch({ type: "add", payload: 1 }),
  };
}

export default connect(x, y)(App);
