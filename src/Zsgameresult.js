import React, { Component } from "react";

let tryAgain = "Try again!";
let notBad = "Not bad!";
let nice = "Nice";
let champion = "You are a champion!";

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  state = {
    score: 0,
    grade: 0
  }

//Answer object, the properties depend on Mariann variables
  Answer = (answer, correctAnswer) => {
    if (answer === correctAnswer){
      this.setState({
        score: this.state.score + 1
      })
    }
  }

  Grade = (correctAnswer) => {
    if (correctAnswer > 3) {
      return tryAgain;
    } else if (correctAnswer <= 3 && correctAnswer>5){
      return notBad;
    } else if ( correctAnswer <=5 && correctAnswer > 8) {
      return nice;
    } else {
      return champion;
    }
  }

//Need to use the player name
  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span> 
            <div className="grade">{this.state.grade}</div>
            <div className="earned-score">Your earn 10/{this.state.score} correct answers!</div>
        </div>
      </div>
    );
  }
}