import React, { Component } from "react";
import data from "./data";
import { Link } from "react-router-dom";
export default class PopUp extends Component {
  Grade = () => {
    if (data.score < data.max * 0.3) {
      return (
        <div>
          <p className="Zsp">Try again!</p>
          <img
            src="https://i.imgur.com/eVm4RUM.gif"
            height="180vh"
            alt="Stupid Hooman"
          />
        </div>
      );
    } else if (data.score >= data.max * 0.3 && data.score <= data.max * 0.4) {
      return (
        <div>
          <p className="Zsp">That's not bad!</p>
          <img
            src="https://media.giphy.com/media/SRO0ZwmImic0/giphy.gif"
            height="180vh"
            alt="Kitty cat"
          />
        </div>
      );
    } else if (data.score >= data.max * 0.5 && data.score <= data.max * 0.8) {
      return (
        <div>
          <p className="Zsp">That's pretty good!</p>
          <img
            src="https://media.giphy.com/media/IRFQYGCokErS0/giphy.gif"
            height="180vh"
            alt="Cat"
          />
        </div>
      );
    } else {
      return (
        <div>
          <p className="Zsp">You are a champion!</p>
          <img
            src="https://media.giphy.com/media/MeIucAjPKoA120R7sN/giphy.gif"
            height="180vh"
            alt="Rabbit"
          />
        </div>
      );
    }
  };

  componentDidMount(){
    this.playAgainButton.focus();
  }

  //Need to use the player name
  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <Link to="/">
            <span className="close">&times;</span>
          </Link>
          <div className="grade">
            <div className="Name">Hey {data.playerNamePopup}</div>
            <div className="Points_grade">{this.Grade()}</div>
          </div>
          <div className="earned-score">
            You have {data.score}/{data.max} correct answers!
          </div>
          <Link to="/">
            <button id="playAgainButton" ref={(playAgainButton) => { this.playAgainButton = playAgainButton; }}>
              Play again!
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
