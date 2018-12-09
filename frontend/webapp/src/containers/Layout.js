import React, { Component } from "react";
import AppBar from "../components/AppBar";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <AppBar />
        {this.props.children}
      </div>
    );
  }
}
