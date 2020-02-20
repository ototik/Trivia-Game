import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Results from "./Results/Results";
import Game from "./Game/Game";
import Anotherpage from "./Anotherpage/Anotherpage";
import Home from "./Home/Home";
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
