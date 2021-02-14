import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

let div = document.createElement("div");
document.body.appendChild(div);

console.log = function (content) {
  div.innerHTML += `${content}<br>`;
};

class Baba extends React.Component {
  constructor() {
    super();
    this.state = {
      hasChild: true,
    };
  }
  onClick() {
    this.setState({
      hasChild: false,
    });
  }
  callSon() {
    this.setState({
      word: "你还好吧",
    });
  }
  createSon() {
    this.setState({
      hasChild: true
    })
  }
  render() {
    return (
      <div className="baba">
        我是你爸爸
        <button onClick={() => this.onClick()}>kill son</button>
        <button onClick={() => this.callSon()}>call son</button>
        <button onClick={() => this.createSon()}>create son</button>
        {this.state.hasChild ? <App word={this.state.word} /> : null}
      </div>
    );
  }
}

class App extends React.Component {
  add1() {
    console.log("用户点击了");
    this.setState({
      n: this.state.n + 1,
      flag: true,
    });
  }
  constructor() {
    super();
    this.state = {
      n: 0,
      flag: false,
    };
    // console.log(this.state)
    console.log("创建 App");
  }
  componentWillMount() {
    // console.log(this.state)
    console.log("将要 mount App");
  }
  render() {
    console.log(`${this.state.flag ? "更新" : "填充"} App 的内容`);
    return (
      <div className="app">
        {this.state.n}
        <br />
        我爸说 {this.props.word}
        <br />
        <button
          onClick={() => {
            this.add1();
          }}
        >
          +1
        </button>
      </div>
    );
  }
  componentDidMount() {
    console.log("mount App 完毕");
  }
  componentWillUpdate() {
    console.log("update App 之前");
  }
  componentDidUpdate() {
    console.log("update App 之后");
  }
   componentWillUnmount() {
    console.log("App 快要死了，记得喂狗");
  }
  componentWillReceiveProps() {
    console.log("我爸说话了");
  }
}

ReactDOM.render(<Baba />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
