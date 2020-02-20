import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Zsgameresult from "./components/Zsgameresult";
import Nselector from "./components/Nselector";
import history from "./history";
import TNameInput from "./components/TNameInput"
import Mquestions from "./components/Mquestions";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={TNameInput} />
          <Route path="/Mquestions" component={Mquestions} />
          <Route path="/Nselector" component={Nselector} />
          <Route path="/Zsgameresult" component={Zsgameresult} />
        </Switch>
      </Router>
    );
  }
}
