import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Symbol extends Component {
  state = {
    symbol: this.props.symbol,
    name: this.props.name
  };
  render() {
    return (
      <div>
        <h5>{this.state.symbol}</h5>
        <h6>{this.state.name}</h6>
      </div>
    );
  }
}

export default Symbol;
