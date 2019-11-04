import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar fixed-top navbar-light bg-dark">
        <Link className="w-100" to="/symbols">
          <input
            onChange={this.handleOnChange}
            type="text"
            className="text-dark w-100 rounded border-0 m-1 p-2 h5"
            placeholder="Search for stocks"
          />
        </Link>
      </nav>
    );
  }

  handleOnChange = event => {
    this.props.onChange(event);
  };
}

export default NavBar;
