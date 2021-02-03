import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        你点击了 <span id="value">{this.props.n}</span> 次
        <div>
          <button id="add1" onClick={() => this.props.add1()}>
            +1
          </button>
          <button id="add2" onClick={() => this.props.add2()}>
            +2
          </button>
          <button
            id="add1IfOdd"
            onClick={() => this.props.add1IfOdd(this.props.n)}
          >
            如果是单数就+1
          </button>
          <Button cb={() => this.props.add1After2Sec()} />
        </div>
      </div>
    );
  }
}

function Button(props) {
  return (
    <button id="add1After2Sec" onClick={() => props.cb()}>
      两秒后+1
    </button>
  );
}

function mapStateToProps(state) {
  return {
    n: state.n,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    add1: () => dispatch({ type: "add", payload: 1 }),
    add2: () => dispatch({ type: "add", payload: 2 }),
    add1IfOdd: function (n) {
      if (n % 2 === 1) {
        return dispatch({ type: "add", payload: 1 });
      }
    },
    add1After2Sec: function () {
      setTimeout(() => {
        return dispatch({ type: "add", payload: 1 });
      }, 2000);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
