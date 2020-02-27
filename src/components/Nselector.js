import React from "react";
import history from "./../history";
import data from "./data";
import "./Nselector.css";

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 10,
      value: "",
      difficulty: "",
      type: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDiff = this.handleDiff.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleQuestionNum = this.handleQuestionNum.bind(this);
  }

  handleChange(event) {
    console.log("change happened1", event.target.value, this.state.value);
    this.setState({ value: event.target.value });
    console.log("change happened", event.target.value, this.state.value);
  }

  handleDiff = event => {
    console.log(
      "change happened1",
      event.target.difficulty,
      this.state.difficulty
    );
    const diff = event.target.value;
    this.setState({ difficulty: diff });
    console.log("change happened", event.target.value, this.state.difficulty);
  };

  handleType(event) {
    this.setState({ type: event.target.value });
  }

  handleQuestionNum(event) {
    this.setState({ number: event.target.value });
  }

  handleSubmit(event) {
    var apiUrl = `https://opentdb.com/api.php?amount=${this.state.number}&category=${this.state.value}&difficulty=${this.state.difficulty}&type=${this.state.type}&encode=url3986`;
    this.setState({ api: apiUrl });
    console.log(this.state);
    event.preventDefault();
    history.push("/Mquestions");
    data.url = apiUrl;
    return console.log(apiUrl);
  }

  componentDidMount(){
    this.select.focus();
  }

  render() {
    return (
      <div id="form">
        <p id="chooseName">CHOOSE YOUR GAME:</p>
        <div className="Category">
          <label>Category: </label>
          <select
            id="select"
            className="params"
            value={this.state.value}
            onChange={this.handleChange}
            ref={(select) => { this.select = select; }}
          >
            <option id="input" value="">
              Any Category
            </option>
            <option id="input" value="9">
              General Knowledge
            </option>
            <option id="input" value="10">
              Entertainment: Books
            </option>
            <option id="input" value="11">
              Entertainment: Film
            </option>
            <option id="input" value="12">
              Entertainment: Music
            </option>
            <option id="input" value="13">
              Entertainment: Musicals &amp; Theatres
            </option>
            <option id="input" value="14">
              Entertainment: Television
            </option>
            <option id="input" value="15">
              Entertainment: Video Games
            </option>
            <option id="input" value="16">
              Entertainment: Board Games
            </option>
            <option id="input" value="17">
              Science &amp; Nature
            </option>
            <option id="input" value="18">
              Science: Computers
            </option>
            <option id="input" value="19">
              Science: Mathematics
            </option>
            <option id="input" value="20">
              Mythology
            </option>
            <option id="input" value="21">
              Sports
            </option>
            <option id="input" value="22">
              Geography
            </option>
            <option id="input" value="23">
              History
            </option>
            <option id="input" value="24">
              Politics
            </option>
            <option id="input" value="25">
              Art
            </option>
            <option id="input" value="26">
              Celebrities
            </option>
            <option id="input" value="27">
              Animals
            </option>
            <option id="input" value="28">
              Vehicles
            </option>
            <option id="input" value="29">
              Entertainment: Comics
            </option>
            <option id="input" value="30">
              Science: Gadgets
            </option>
            <option id="input" value="31">
              Entertainment: Japanese Anime &amp; Manga
            </option>
            <option id="input" value="32">
              Entertainment: Cartoon &amp; Animations
            </option>
          </select>
        </div>
        <div className="Category">
          <label className="params2">Number of questions: </label>
          {/*          <input
            className="params"
            type="number"
            min="1"
            max="50"
            onChange={this.handleQuestionNum}
            value={this.state.number}
          ></input> */}
          <select onChange={this.handleQuestionNum} value={this.state.number}>
            {data.questionNumber.map(numbers => {
              return <option>{numbers}</option>;
            })}
          </select>
        </div>
        <div className="Category">
          <label>Difficulty: </label>
          <select
            className="params"
            value={this.state.difficulty}
            onChange={this.handleDiff}
          >
            <option id="input" value="">
              Any Difficulty
            </option>
            <option id="input" value="easy">
              Easy
            </option>
            <option id="input" value="medium">
              Medium
            </option>
            <option id="input" value="hard">
              Hard
            </option>
          </select>
        </div>
        <div className="Category">
          <label>Type: </label>
          <select
            className="params"
            value={this.state.type}
            onChange={this.handleType}
          >
            <option id="input" value="any">
              Any Type
            </option>
            <option id="input" value="multiple">
              Multiple
            </option>
            <option id="input" value="boolean">
              True / False
            </option>
          </select>
        </div>
        <button
          className="button "
          type="submit"
          value="Let's play!"
          onClick={this.handleSubmit}
        >
          Let's play!
        </button>
      </div>
    );
  }
}
export default Selector;
