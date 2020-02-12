import React, { Component } from "react";

import history from "./../history";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Game Selector</h1>
          <p>Game selector tabs here</p>
          <form>
            <button class="btn" onClick={() => history.push("/Game")}>
              Go to Game!
            </button>
          </form>
        </div>
      </div>
    );
  }
}
