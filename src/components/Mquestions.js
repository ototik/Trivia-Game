import React from "react";
import axios from "axios";
import data from "./data";
import history from "./../history";
import "./Mquestions.css";

const datafromjson = data;
class Mquestions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answers: [],
      cor_answer: "",
      current: 0,
      max: 0,
      score: 0,
      apidata: ""
    };
    this.getQuestion = this.getQuestion.bind(this);
    this.isRightAnswer = this.isRightAnswer.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.isBoolean = this.isBoolean.bind(this);
    this.isMultiple = this.isMultiple.bind(this);
    this.displayResults = this.displayResults.bind(this);
  }


  componentDidMount() {
    axios
      .get(datafromjson.url)
      .then(response => response.data)
      .then(data => {
        this.setState({
          apidata: data
        });
        this.getQuestion();
      });
  }

  getQuestion() {
    let { current, apidata } = this.state;
    if (apidata.results[current].type === "multiple") {
      this.isMultiple();
    } else {
      this.isBoolean();
    }
  }

  isMultiple() {
    let { current, apidata } = this.state;
    let incorrect_answer = apidata.results[current].incorrect_answers;
    let correctAnswer = apidata.results[current].correct_answer;
    this.setState({
      question: apidata.results[current].question,
      answers: [
        [incorrect_answer[0]],
        [incorrect_answer[1]],
        [incorrect_answer[2]],
        [correctAnswer]
      ].sort(() => Math.random() - 0.5),
      cor_answer: correctAnswer,
      max: apidata.results.length,
      current: current + 1
    });
  }

  isBoolean() {
    let { current, apidata } = this.state;
    this.setState({
      question: apidata.results[current].question,
      answers: [["True"], ["False"]],
      cor_answer: apidata.results[current].correct_answer,
      max: apidata.results.length,
      current: current + 1
    });
  }

  isRightAnswer() {
    this.setState({
      score: this.state.score + 1
    });
  }

  displayResults() {
    let { score, max, cor_answer } = this.state;
    data.score = score;
    data.max = max;
    data.cor_answer = cor_answer;
    history.push("/Zsgameresult");
  }
  /*fixed the results display to update the score before displaying the results, if someone can come up with something cleaner feel free to modify*/
  handleOnClick = event => {
    let { apidata, current } = this.state;
    if (
      this.state.cor_answer === event.target.innerText &&
      apidata.results.length !== current
    ) {
      this.isRightAnswer();
      this.getQuestion();
    } else if (
      this.state.cor_answer !== event.target.innerText &&
      apidata.results.length !== current
    ) {
      this.getQuestion();
    } else if (
      this.state.cor_answer === event.target.innerText &&
      apidata.results.length === current
    ) {
      this.setState({ score: this.state.score + 1 }, () =>
        this.displayResults()
      );
    } else if (
      this.state.cor_answer !== event.target.innerText &&
      apidata.results.length === current
    ) {
      this.displayResults();
    }
  };

  render() {
    let { current, max, question } = this.state;
    return (
      <div className="Mquestions">
        <div id="questionsContainer">
          <h2>
            Questions {current}/{max}
          </h2>
          <p>{decodeURIComponent(question)}</p>
        </div>
        <div className="buttonBoxContainer">
          <div className="buttonBox">
            {/*made the buttons display dynamic*/

            this.state.answers.map(element => {
              return (
                <div key={element}>
                  <button className="answerButton" onClick={this.handleOnClick}>
                    {decodeURIComponent(element)}
                  </button>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Mquestions;
