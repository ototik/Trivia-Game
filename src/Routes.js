import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Results from "./components/Results";
import Game from "./components/Game";
import Anotherpage from "./components/Anotherpage";
import Home from "./components/Home";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Game" component={Game} />
          <Route path="/Anotherpage" component={Anotherpage} />
          <Route path="/Results" component={Results} />
        </Switch>
      </Router>
    );
  }
}
