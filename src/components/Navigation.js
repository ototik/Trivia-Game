import React from "react";
import "./Navigation.css";

import { withRouter } from "react-router-dom";

const Navigation = props => {
  console.log(props);

  return (
    <div className="topnav">
      <a className="active" href="/">
        Home
      </a>
      <a href="/Nselector">Select game</a>
      <a href="/Mquestions">Game</a>
      <a href="/Zsgameresult">Results</a>
    </div>
  );
};

export default withRouter(Navigation);
