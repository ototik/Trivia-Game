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
            {" "}
            {data.value.map(value => {
              return <option value={value.value}>{value.text}</option>;
            })}
          </select>
        </div>
        <div className="Category">
          <label className="params2">Number of questions: </label>
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
            {data.cat.map(category => {
              return <option value={category.value}>{category.text}</option>;
            })}
          </select>
        </div>
        <div className="Category">
          <label>Type: </label>
          <select
            className="params"
            value={this.state.type}
            onChange={this.handleType}
          >
            {data.type.map(type => {
              return <option value={type.value}>{type.text}</option>;
            })}
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
