import React, { Component } from "react";
import "./TNameInput.css";
import history from "./../history";
import data from "./data";
import trivia from "./trivia.png";
let inp;
class TNameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
      displayError: ""
    };
  }

  onHandleChange(event) {
    inp = event.target.value;
    inp = inp.replace(/[^\w\s]/gi, "");
    inp = inp.replace(/ /g, "");
    data.playerNamePopup = inp;
    this.setState({
      playerName: data.playerNamePopup
    });
  }

  onChangePlayerName(event) {
    this.state.playerName.length > 3
      ? history.push("/Nselector")
      : this.setState({ displayError: "Please use minimum 3 characters!" });
  }

  render() {
    return (
      <div>
        <div className="img-container">
          <img className="logo" src={trivia} alt="Trivia logo" />
        </div>{" "}
        <div className="Tcontainer">
          <label className="inputLabel">
            {" "}
            What is your name?
            <input
              type="text"
              value={this.state.playerName}
              name="playerName"
              size="30"
              minLength={3}
              maxLength={18}
              autocomplete="off"
              required
              onChange={event => this.onHandleChange(event)}
            />
            <button
              className="inputButton"
              onClick={this.onChangePlayerName.bind(this)}
            >
              That's me, let's go!
            </button>
          </label>
          <p>{this.state.displayError}</p>
        </div>
      </div>
    );
  }
}

export default TNameInput;
