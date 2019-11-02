import React, { Component } from "react";

class Quote extends Component {
  state = {};
  render() {
    const quote = this.props.quote;
    return (
      <div>
        <h5>{quote.companyName}</h5>
        <span className="badge badge-primary">{quote.primaryExchange}</span>
        <strong className="text-muted ml-2">{quote.symbol}</strong>
        <span className="text-center h4 p-2">{quote.latestPrice}</span>
        <span className="text-center h5 p-2">{this.formatChangePercent()}</span>
        <span className="text-center h6">{this.formatChange()}</span>
      </div>
    );
  }

  formatChangePercent() {
    const quote = this.props.quote;
    return quote.changePercent < 0 ? (
      <span className="text-danger">
        {quote.changePercent * -1 * 100 + "%"}
      </span>
    ) : (
      <span className="text-success">{quote.changePercent * 100 + "%"}</span>
    );
  }

  formatChange() {
    const quote = this.props.quote;
    return quote.change < 0 ? (
      <span className="text-secondary">
        {"(" + quote.change * -1 + "\u25bc" + ")"}
      </span>
    ) : (
      <span className="text-secondary">
        {"(" + quote.change + "\u25b2" + ")"}
      </span>
    );
  }
}

export default Quote;
