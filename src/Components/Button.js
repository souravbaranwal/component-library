import React, { Component } from "react";
import "./CSS/button.scss";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleStyle = () => {
    let { size, type } = this.props;
    let style = {};

    switch (type) {
      case "primary":
        style = { background: "blue" };
        break;
      case "danger":
        style = { background: "#ff5a5a" };
        break;
      case "success":
        style = { background: "#23d160" };
        break;
      case "info":
        style = { background: "#209cee" };
        break;
      case "link":
        style = { background: "#3273dc" };
        break;
      default:
        style = { background: "#555555" };
    }

    switch (size) {
      case "small":
        style = { ...style, fontSize: "12px" };
        break;
      case "large":
        style = { ...style, fontSize: "20px" };
        break;

      default:
        style = { ...style, fontSize: "16px" };
    }

    return style;
  };
  render() {
    let { label } = this.props;

    return (
      <button style={this.handleStyle()} onClick={this.props.clickme}>
        {label || "please add button name"}
      </button>
    );
  }
}

export default Button;
