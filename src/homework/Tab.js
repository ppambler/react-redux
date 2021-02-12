import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Tab() {
  return (
    <div>
      <Router>
        <Link to="/tab1">Tab1</Link>
        <Link to="/tab2">Tab2</Link>
        <Switch>
          
          <Route path="/tab1">
            <Tab1 />
          </Route>
          <Route path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/">
            <Tab1 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Tab1() {
  return <div>Tab1</div>;
}
function Tab2() {
  return <div>Tab2</div>;
}
