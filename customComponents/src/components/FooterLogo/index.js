import React, { Component } from "react";
import "./styles.scss";
import Logo from "../Logo";

export default class FooterLogo extends Component {
  render() {
    return (
      <div className="custom-logo">
        <div className="logo-row">
          <a className="logo-link" href="https://www.gc.cuny.edu/home">
            <Logo.GraduateCenter />
          </a>
          <a className="logo-link" href="https://www.upress.umn.edu/">
            <Logo.UmnPress />
          </a>
        </div>
        <div className="logo-row">
          <a className="logo-link" href="https://gcdsl.commons.gc.cuny.edu/">
            <Logo.GcScholarship />
          </a>
          <a className="logo-link" href="https://gcdi.commons.gc.cuny.edu/">
            <Logo.GcInitiatives />
          </a>
        </div>
      </div>
    );
  }
}
