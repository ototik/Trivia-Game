import React, { Component } from "react";
import {Router, Route, Switch} from "react-router";

import history from "./history";
import TNameInput from "./components/TNameInput";


class Routes extends Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/"  component={TNameInput} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
