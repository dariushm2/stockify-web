import React, { Component } from "react";
import Quote from "./quote";

import SweetAlert from "react-bootstrap-sweetalert";

class WatchList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    watchList: [],
    alert: null
  };

  render() {
    const watchList = this.state.watchList;
    //console.log("WatchList size:" + watchList.length);
    return (
      <div className="">
        <ul className="m-2 pt-300 list-group">
          {watchList.sort().map(symbol => (
            <li
              key={symbol}
              id={symbol}
              className="list-group-item btn-light"
              onClick={() => this.popupDelete(symbol)}
            >
              <Quote symbol={symbol} />
            </li>
          ))}
        </ul>
        {this.state.alert}
      </div>
    );
  }

  componentDidMount() {
    this.getWatchList();
  }

  setWatchList = watchList => {
    this.setState({ watchList });
  };

  getWatchList = () => {
    let symbols = JSON.parse(localStorage.getItem("symbols"));
    console.log(symbols);
    const index = symbols ? symbols.length : 0;
    if (index === 0) symbols = [];
    this.setWatchList(symbols);
  };

  popupDelete = symbol => {
    console.log("popup");
    const getAlert = () => (
      <SweetAlert
        warning
        showCancel
        confirmBtnText="Yes, delete it!"
        confirmBtnBsStyle="danger"
        //cancelBtnBsStyle="default"
        title="Are you sure?"
        onConfirm={() => this.deleteStock(symbol)}
        onCancel={() => this.cancelDelete()}
        openAnim={false}
      >
        Do you want to delete {symbol} from watchlist?
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

  deleteStock = symbol => {
    let symbols = JSON.parse(localStorage.getItem("symbols"));
    const index = symbols.indexOf(symbol);
    symbols.splice(index, 1);
    console.log(symbols);
    localStorage.setItem("symbols", JSON.stringify(symbols));

    this.setState({
      alert: null
    });
    this.getWatchList();
  };

  // fetchQuotes = async () => {
  //   while (true) {
  //     this.setState({ quotes: [] });
  //     await this.getWatchList().forEach(symbol => {
  //       fetch(this.buildQuoteUrl(symbol))
  //         .then(response => response.json())
  //         .then(this.buildQuotesList)
  //         .catch();
  //     });
  //     await sleep(500000);
  //   }
  // };

  // buildQuotesList = quote => {
  //   let quotes = this.state.quotes;
  //   quotes.push(quote);
  //   this.setState({ quotes });
  // };
}

export default WatchList;
