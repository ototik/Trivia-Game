import React from "react";
import "./Navigation.css";

import { withRouter } from "react-router-dom";

const Navigation = props => {
  console.log(props);

  return (
    <div class="topnav">
      <a class="active" href="/">
        Home
      </a>
      <a href="/Game">Game</a>
      <a href="/Anotherpage">Anotherpage</a>
      <a href="/Results">Results</a>
    </div>
  );
};

export default withRouter(Navigation);
