import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar fixed-top navbar-light bg-dark">
        <Link
          className="w-100"
          to="/symbols"
          onClick={this.props.onSymbolSearch}
        >
          <input
            ref="symbolInput"
            type="text"
            className="bg-secondary text-light w-100 rounded border-0 m-1 p-2 form-control"
            placeholder="GOOG"
          />
        </Link>
      </nav>
    );
  }

  componentDidMount() {
    this.refs.symbolInput.setAttribute(
      "style",
      ".form-control::-webkit-input-placeholder { color: #C0C0C0; }"
    );
  }
}

export default NavBar;
