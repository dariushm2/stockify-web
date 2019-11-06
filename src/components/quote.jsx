import React, { Component } from "react";
import { BASE_URL, TOKEN } from "../App";

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

const controller = new AbortController();
const signal = controller.signal;

class Quote extends Component {
  isLoaded = false;

  state = {
    quote: {
      symbol: this.props.symbol,
      companyName: "",
      primaryExchange: "",
      latestPrice: 0,
      changePercent: 0,
      change: 0
    }
  };
  render() {
    const quote = this.state.quote;
    return (
      <div>
        <h5>{quote.companyName}</h5>

        <div className="text-center">
          <span className="text-center h4 p-2">
            {quote.latestPrice.toFixed(2)}
          </span>
          <span className="text-center h5 p-2">
            {this.formatChangePercent()}
          </span>
          <span className="text-center h6">{this.formatChange()}</span>
        </div>

        <strong className="badge badge-primary  ml-2">{quote.symbol}</strong>
        <span className="ml-2 badge text-muted">{quote.primaryExchange}</span>
      </div>
    );
  }

  componentDidMount() {
    //console.log(this.state.quote.symbol);
    this.isLoaded = true;
    this.fetchQuote();
  }

  componentWillUnmount() {
    console.log(this.state.quote.symbol + " unMount");
    this.isLoaded = false;
  }

  fetchQuote = async () => {
    while (this.isLoaded) {
      fetch(this.buildQuoteUrl())
        .then(response => response.json())
        .then(this.setQuote)
        .catch();

      await sleep(5000);
    }
  };

  setQuote = quote => {
    //if (JSON.stringify(quote) !== JSON.stringify(this.state.quote))
    console.log("new quote");
    this.setState({ quote });
  };

  buildQuoteUrl() {
    return BASE_URL + "stock/" + this.state.quote.symbol + "/quote" + TOKEN;
  }

  formatChangePercent() {
    const quote = this.state.quote;
    const changePercent =
      quote.changePercent > 0
        ? quote.changePercent * 100
        : quote.changePercent * -1 * 100;
    return quote.changePercent < 0 ? (
      <span className="text-danger">{changePercent.toFixed(2) + "%"}</span>
    ) : (
      <span className="text-success">{changePercent.toFixed(2) + "%"}</span>
    );
  }

  formatChange() {
    const quote = this.state.quote;
    return quote.change < 0 ? (
      <span className="text-secondary">
        {"(" + quote.change.toFixed(2) * -1 + "\u25bc)"}
      </span>
    ) : (
      <span className="text-secondary">
        {"(" + quote.change.toFixed(2) + "\u25b2)"}
      </span>
    );
  }
}

export default Quote;
