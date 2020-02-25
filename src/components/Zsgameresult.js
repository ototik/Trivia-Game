import React, { Component } from "react";
import data from "./data";
import { Link } from "react-router-dom";

export default class PopUp extends Component {
  Grade = () => {
    if (data.score < data.max * 0.3) {
      return "Try again!";
    } else if (data.score >= data.max * 0.3 && data.score <= data.max * 0.4) {
      return "That's not bad!";
    } else if (data.score >= data.max * 0.5 && data.score <= data.max * 0.8) {
      return "That's pretty good!";
    } else {
      return "You are a champion!";
    }
  };

  //Need to use the player name
  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <Link to="/">
            <span className="close">&times;</span>
          </Link>
          <div className="grade">
            <p>Hey {data.playerNamePopup}</p>
            <p>{this.Grade()}</p>
          </div>
          <div className="earned-score">
            You earn {data.score}/{data.max} correct answers!
          </div>
          <Link to="/">
            <button>Play again!</button>
          </Link>
        </div>
      </div>
    );
  }
}
