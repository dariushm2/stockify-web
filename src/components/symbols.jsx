import React, { Component } from "react";
import Symbol from "./symbol";
import { BASE_URL, TOKEN } from "../App";
import { Link } from "react-router-dom";

class Symbols extends Component {
  state = {
    symbols: []
  };

  render() {
    return (
      <div className="mr-200">
        <ul className="m-2 list-group">
          {this.state.symbols.map(symbol => (
            <Link to="/" className="text-decoration-none">
              <li
                key={symbol.symbol}
                id={symbol.symbol}
                className="list-group-item  btn-light"
                onClick={() => this.handleSymbolClick(symbol.symbol)}
              >
                <Symbol symbol={symbol.symbol} name={symbol.name} />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    //this.fetchSymbols();

    const symbols = [
      { symbol: "AAPL", name: "Apple Inc." },
      { symbol: "GOOG", name: "Google Ltd." }
    ];

    this.buildSymbolsList(symbols);
  }

  fetchSymbols = async () => {
    const data = await fetch(this.buildSymbolsUrl());
    const symbols = await data.json();
    console.log(symbols.length);
    this.buildSymbolsList(symbols);
  };

  buildSymbolsList = symbols => {
    this.setState({ symbols });
  };

  buildSymbolsUrl = () => {
    return BASE_URL + "ref-data/symbols" + TOKEN;
  };

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
