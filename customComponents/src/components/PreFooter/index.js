import React, { Component } from "react";
import "./styles.scss";

export default class PreFooter extends Component {
  render() {
    return (
      <div className="custom-prefooter">
        <div className="container">
          <span>Here is some content before the footer</span>
        </div>
      </div>
    );
  }
}
