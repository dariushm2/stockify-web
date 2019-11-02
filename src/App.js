import React, { Component } from "react";
import NavBar from "./components/navbar";
import Quotes from "./components/quotes";
import Symbols from "./components/symbols";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

export const BASE_URL = "https://cloud.iexapis.com/stable/";
export const TOKEN = "?token=pk_5e8577fd11eb4469be629c5e2de8023f";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div className="pt-70">
          <NavBar onClick={this.onSymbolSearch} />
          <Switch>
            <Route path="/symbols" component={Symbols} />
            <Route path="/" component={Quotes} />
          </Switch>
        </div>
      </Router>
    );
  }

  componentWillMount() {
    document.body.style.paddingTop = "65px";
    console.log("hey");
  }

  onSymbolSearch = () => {};
}

export default App;
