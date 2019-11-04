import React, { Component } from "react";
import Symbol from "./symbol";
import { BASE_URL, TOKEN } from "../App";
import { Link } from "react-router-dom";
import { List, AutoSizer } from "react-virtualized";

class Symbols extends Component {
  state = {
    symbols: this.props.symbols
  };

  render() {
    return (
      <div className="">
        <AutoSizer style={{ width: "75%", height: "calc(100vh - 65px)" }}>
          {({ width, height }) => (
            <ul className="list-group">
              <List
                rowCount={this.state.symbols.length}
                width={width}
                height={height}
                rowHeight={84}
                rowRenderer={this.rowRenderer.bind(this)}
                overscanRowCount={3}
              />
            </ul>
          )}
        </AutoSizer>
      </div>
    );
  }

  rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style // Style object to be applied to row (to position it)
  }) {
    const symbol = this.state.symbols[index];
    return (
      <div
        onClick={() => this.handleSymbolClick(symbol.symbol)}
        className="m-2 "
        key={key}
        style={style}
      >
        <Link to="/" className="text-decoration-none text-dark">
          <li
            className="list-group-item btn-light"
            style={{ width: "calc(100% - 15px)" }}
          >
            <Symbol symbol={symbol.symbol} name={symbol.name} />
          </li>
        </Link>
      </div>
    );
  }

  handleSymbolClick = symbol => {
    //localStorage.removeItem("symbols");
    let symbols = JSON.parse(localStorage.getItem("symbols"));
    const index = symbols ? symbols.length : 0;
    if (index > 0) {
      if (!symbols.includes(symbol)) symbols[index] = symbol;
    } else symbols = Array(symbol);

    localStorage.setItem("symbols", JSON.stringify(symbols));
    console.log(symbols);
    //console.log(JSON.parse(localStorage.getItem("symbol")));
  };
}

export default Symbols;
