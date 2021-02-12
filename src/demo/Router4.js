import { useState } from "react";
function Box1() {
  return <div className="box">注册</div>;
}
function Box2() {
  return <div className="box">登录</div>;
}

function Welcome() {
  return <div className="box">欢迎</div>;
}

function App() {
  let pathName = window.location.pathname;
  let initUi = "";
  if (pathName === "/signup") {
    initUi = "注册";
  } else if (pathName === "/login") {
    initUi = "登录";
  } else {
    initUi = "欢迎";
  }
  let [ui, setUi] = useState(initUi);
  let onClickLogin = () => {
    setUi("登录");
    window.history.pushState(null, "", "/login");
  };
  let onClickSignUp = () => {
    setUi("注册");
    window.history.pushState(null, "", "/signup");
  };
  let onClickWelcome = () => {
    setUi("欢迎");
    window.history.pushState(null, "", "/welcome");
  };
  let showUi = () => {
    if (ui === "登录") {
      return <Box2 />;
    } else if (ui === "注册") {
      return <Box1 />;
    } else {
      return <Welcome />;
    }
  };
  return (
    <div className="app">
      <button onClick={onClickLogin}>登录</button>
      <button onClick={onClickSignUp}>注册</button>
      <button onClick={onClickWelcome}>注册</button>
      <div>{showUi()}</div>
    </div>
  );
}

export default App;
