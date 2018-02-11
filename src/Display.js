import React, { PureComponent } from "react";
import "./Display.css";

class Display extends PureComponent {
  render() {
    return (
      <div className="displayContainer">
        <div className="innerContainer">
          <div className="definitionHeader">Definition: </div>
          <div className="definitionText">{this.props.definition}</div>
        </div>
      </div>
    );
  }
}

export default Display;
