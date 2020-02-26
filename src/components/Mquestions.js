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
    let { current, apidata, score, max, cor_answer } = this.state;
    if (apidata.results.length === current) {
      data.score = score;
      data.max = max;
      data.cor_answer = cor_answer;
      console.log(data.score);
      console.log("Elso if: ", current);
      history.push("/Zsgameresult");
    } else {
      if (apidata.results[current].type === "multiple") {
        this.setState({
          question: apidata.results[current].question,
          answers: [
            [apidata.results[current].incorrect_answers[0]],
            [apidata.results[current].incorrect_answers[1]],
            [apidata.results[current].incorrect_answers[2]],
            [apidata.results[current].correct_answer]
          ].sort(() => Math.random() - 0.5),
          cor_answer: apidata.results[current].correct_answer,
          max: apidata.results.length,
          current: current + 1
        });
        console.log("Multiple: ", current);
      } else {
        this.setState({
          question: apidata.results[current].question,
          answers: [["True"], ["False"]],
          cor_answer: apidata.results[current].correct_answer,
          max: apidata.results.length,
          current: current + 1
        });
        console.log(this.state.apidata.results[current].type);
        console.log("True/false: ", current);
      }
    }
  }
  isRightAnswer() {
    this.setState({
      score: this.state.score + 1
    });
    this.getQuestion();
  }

  render() {
    let { current, max, score, answers, question, cor_answer } = this.state;
    return (
      <div className="Mquestions">
        <div>
          <h2>
            Questions {current}/{max} Score {score}/{max}
          </h2>
          <p>{decodeURIComponent(question)}</p>
        </div>
        <div className="buttonBox">
          <ul>
            <button
              id="button1"
              onClick={event => {
                cor_answer === event.target.innerText
                  ? this.isRightAnswer()
                  : this.getQuestion();
              }}
            >
              {decodeURIComponent(answers[0])}
            </button>
            <button
              id="button2"
              onClick={event => {
                cor_answer === event.target.innerText
                  ? this.isRightAnswer()
                  : this.getQuestion();
              }}
            >
              {decodeURIComponent(answers[1])}
            </button>
            <button
              id="button3"
              onClick={event => {
                cor_answer === event.target.innerText
                  ? this.isRightAnswer()
                  : this.getQuestion();
              }}
            >
              {decodeURIComponent(answers[2])}
            </button>
            <button
              id="button4"
              onClick={event => {
                cor_answer === event.target.innerText
                  ? this.isRightAnswer()
                  : this.getQuestion();
              }}
            >
              {decodeURIComponent(answers[3])}
            </button>
          </ul>
        </div>
      </div>
    );
  }
}

export default Mquestions;
