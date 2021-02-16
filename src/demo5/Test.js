import Radium from "radium";
import React from "react";
import color from "color";
import PropTypes from "prop-types";

class Button extends React.Component {
  static propTypes = {
    kind: PropTypes.oneOf(["primary", "warning"]).isRequired,
  };

  render() {
    // Radium extends the style attribute to accept an array. It will merge
    // the styles in order. We use this feature here to apply the primary
    // or warning styles depending on the value of the `kind` prop. Since its
    // all just JavaScript, you can use whatever logic you want to decide which
    // styles are applied (props, state, context, etc).
    return (
      <button style={[styles.base, styles[this.props.kind]]}>
        {this.props.children}
      </button>
    );
  }
}

Button = Radium(Button);
console.log(color);

// You can create your style objects dynamically or share them for
// every instance of the component.
var styles = {
  base: {
    background: "transparent",
    borderRadius: "3px",
    border: "2px solid palevioletred",
    color: "palevioletred",
    margin: "0.5em 1em",
    padding: "0.25em 1em",

    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ":hover": {
      background: color("orange").lighten(0.2),
      // background: 'white'
    },
  },

  primary: {
    background: "palevioletred",
    color: "white",
  },

  warning: {
    background: "yellow",
  },
};

export default function Test() {
  return (
    <div>
      <Button kind="primary">primary</Button>
      <Button kind="warning">warning</Button>
    </div>
  );
}
