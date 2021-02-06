import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const themeContext = React.createContext();

function Box(props) {
  return <div className={`box ${props.theme}`}>{props.children}</div>;
}
function Button() {
  return <button className="button">button</button>;
}
function Input() {
  return <input className="input is-primary" />;
}

class App extends React.Component {
  change = () => {
    if (this.state.theme === "green") {
      this.setState({ theme: "red" });
    } else {
      this.setState({ theme: "green" });
    }
  };
  constructor() {
    super();
    this.state = {
      theme: "green",
    };
  }
  render() {
    return (
      <themeContext.Provider value={this.state.theme}>
        <div className="App">
          <button onClick={this.change} className="button">换肤</button>
          <themeContext.Consumer>
            {(theme) => (
              <div>
                <Box theme={theme}>
                  <Button />
                </Box>
                <Box theme={theme}>
                  <Input />
                </Box>
              </div>
            )}
          </themeContext.Consumer>
        </div>
      </themeContext.Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
