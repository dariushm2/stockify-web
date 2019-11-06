import React, { Component } from "react";
import NavBar from "./components/navbar";
import WatchList from "./components/watchlist";
import Symbols from "./components/symbols";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

export const BASE_URL = "https://cloud.iexapis.com/stable/";
export const TOKEN = "?token=pk_5e8577fd11eb4469be629c5e2de8023f";

class App extends Component {
  state = {
    symbols: [],
    symbolsFiltered: [],
    searchBox: ""
  };

  render() {
    return (
      <Router>
        <div className="pt-70">
          <NavBar onChange={this.handleOnChange} />
          <Switch>
            <Route
              path="/symbols"
              component={props => (
                <Symbols {...props} symbols={this.state.symbolsFiltered} />
              )}
            />
            <Route path="/" component={WatchList} />
          </Switch>
        </div>
      </Router>
    );
  }

  componentDidMount() {
    document.body.style.paddingTop = "65px";
    this.fetchSymbols();
  }

  fetchSymbols = async () => {
    const data = await fetch(this.buildSymbolsUrl());
    const symbols = await data.json();
    console.log(symbols.length);
    this.buildSymbolsList(symbols);
    this.buildSymbolsFilteredList(symbols);
  };

  buildSymbolsList = symbols => {
    this.setState({ symbols });
  };

  buildSymbolsUrl = () => {
    return BASE_URL + "ref-data/symbols" + TOKEN;
  };

  handleOnChange = event => {
    //console.log(event.target.value);
    const search = event.target.value.toLowerCase();
    this.setState({ searchBox: event });
    const symbols = this.state.symbols.filter(symbol =>
      symbol.name.toLowerCase().includes(search)
    );
    this.buildSymbolsFilteredList(symbols);
  };

  buildSymbolsFilteredList = symbols => {
    this.setState({ symbolsFiltered: symbols });
  };
}

export default App;

// { symbol: "AAPL", name: "Apple Inc." },
//       { symbol: "GOOG", name: "Google Ltd." },
//       { symbol: "AAPL", name: "Apple Inc." },
//       { symbol: "GOOG", name: "Google Ltd." },
//       { symbol: "AAPL", name: "Apple Inc." },
//       { symbol: "GOOG", name: "Google Ltd." },
//       { symbol: "AAPL", name: "Apple Inc." },
//       { symbol: "GOOG", name: "Google Ltd." },
//       { symbol: "AAPL", name: "Apple Inc." },
//       { symbol: "GOOG", name: "Google Ltd." },
//       { symbol: "AAPL", name: "Apple Inc." },
//       { symbol: "GOOG", name: "Google Ltd." },
//       { symbol: "AAPL", name: "Apple Inc." },
//       { symbol: "GOOG", name: "Google Ltd." }
