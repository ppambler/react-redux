import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Link to="/"><button>首页</button></Link> | 
        <Link to="/signup"> 注册</Link> | 
        <Link to="/login"> 登录</Link> | 
        <Link to="/welcome"> 欢迎</Link>

        <Switch>
          <Route path="/signup">
            <Box1 />
          </Route>
          <Route path="/login">
            <Box2 />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Box1() {
  return <div className="box">注册</div>;
}
function Box2() {
  return <div className="box">登录</div>;
}

function Welcome() {
  return <div className="box">欢迎</div>;
}

function Home() {
  return <div className="box">首页</div>;
}