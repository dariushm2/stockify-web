import React, { Component } from "react";
import Quote from "./quote";
import { BASE_URL, TOKEN } from "../App";
import SweetAlert from "react-bootstrap-sweetalert";

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

class Quotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      alert: null
    };
  }

  render() {
    return (
      <div className="">
        <ul className="m-2 pt-300 list-group">
          {this.state.quotes
            .sort((quote1, quote2) =>
              quote1.symbol.localeCompare(quote2.symbol)
            )
            .map(quote => (
              <li
                key={quote.symbol}
                id={quote.symbol}
                className="list-group-item btn-light"
                onClick={() => this.popupDelete(quote)}
              >
                <Quote quote={quote} />
              </li>
            ))}
        </ul>
        {this.state.alert}
      </div>
    );
  }

  popupDelete = quote => {
    console.log("popup");
    const getAlert = () => (
      <SweetAlert
        warning
        showCancel
        confirmBtnText="Yes, delete it!"
        confirmBtnBsStyle="danger"
        //cancelBtnBsStyle="default"
        title="Are you sure?"
        onConfirm={() => this.deleteStock(quote)}
        onCancel={() => this.cancelDelete()}
      >
        Do you want to delete {quote.symbol} from watchlist?
      </SweetAlert>
    );
    this.setState({
      alert: getAlert()
    });
  };

  cancelDelete() {
    this.setState({
      alert: null
    });
  }

  deleteStock = quote => {
    let symbols = JSON.parse(localStorage.getItem("symbols"));
    const index = symbols.indexOf(quote.symbol);
    symbols.splice(index, 1);
    console.log(symbols);
    localStorage.setItem("symbols", JSON.stringify(symbols));

    this.setState({
      alert: null
    });
    this.fetchQuotes();
  };

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
    while (true) {
      this.setState({ quotes: [] });
      await this.getWatchList().forEach(symbol => {
        fetch(this.buildQuoteUrl(symbol))
          .then(response => response.json())
          .then(this.buildQuotesList)
          .catch();
      });
      await sleep(5000);
    }
  };

  getWatchList = () => {
    let symbols = JSON.parse(localStorage.getItem("symbols"));
    console.log(symbols);
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
    let quotes = this.state.quotes;
    quotes.push(quote);
    this.setState({ quotes });
    //console.log(this.state.quotes);
  };
}

export default Quotes;
