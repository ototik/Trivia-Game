import React, { Component } from "react";

import history from "./../history";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Welcome to Trivia</h1>
          <p>What is your name?</p>
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
