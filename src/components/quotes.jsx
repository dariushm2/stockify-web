import React, { Component } from "react";
import Quote from "./quote";
import { BASE_URL, TOKEN } from "../App";

class Quotes extends Component {
  state = {
    quotes: []
  };
  render() {
    return (
      <div className="">
        <ul className="m-2 pt-300 list-group">
          {this.state.quotes.map(quote => (
            <li
              key={quote.symbol}
              id={quote.symbol}
              className="list-group-item"
            >
              <Quote quote={quote} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchQuotes();

    const quotes = [
      {
        symbol: "AAPL",
        companyName: "Apple Inc.",
        primaryExchange: "NASDAQ",
        latestPrice: 145.24,
        changePercent: 0.00145,
        change: 5.5
      },
      {
        symbol: "GOOG",
        companyName: "Google Ltd.",
        primaryExchange: "NASDAQ",
        latestPrice: 752.12,
        changePercent: 0.00245,
        change: 14.35
      }
    ];
    //this.buildQuotesList(quotes);
  }

  fetchQuotes = async () => {
    await this.getWatchList().forEach(symbol => {
      console.log(symbol);
      fetch(this.buildQuoteUrl(symbol))
        .then(response => response.json())
        .then(this.buildQuotesList)
        .catch();
    });
  };

  getWatchList = () => {
    let symbols = JSON.parse(localStorage.getItem("symbols"));
    const index = symbols ? symbols.length : 0;
    if (index === 0) symbols = Array();
    return symbols;
  };

  buildQuoteUrl = symbol => {
    return BASE_URL + "stock/" + symbol + "/quote" + TOKEN;
  };

  buildQuote = quote => {
    this.setState({ quote });
  };

  buildQuotesList = quote => {
    console.log(quote);
    let quotes = this.state.quotes;
    quotes.push(quote);
    this.setState({ quotes });
    console.log(this.state.quotes);
  };
}

export default Quotes;
