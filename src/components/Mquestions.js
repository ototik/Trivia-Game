import React from "react";
import axios from "axios";
import data from "./data";
import history from "./../history";
import "./Mquestions.css";
import Loader from 'react-loader-spinner';

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
      apidata: "",
      loading: true,
      show: false
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
          apidata: data,
          loading: false
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
  /*creating the answers array with map*/ 
  isMultiple() {
    let { current, apidata } = this.state;
    let answersApi = apidata.results[current].incorrect_answers.concat(apidata.results[current].correct_answer)
    
    this.setState({
      question: apidata.results[current].question,
      answers: answersApi.map((element) => {
        return element
      }).sort(() => Math.random() - 0.5),
      cor_answer: decodeURIComponent(apidata.results[current].correct_answer),
      max: apidata.results.length,
      current: current + 1
    });
  }

  isBoolean() {
    let { current, apidata } = this.state;
    this.setState({
      question: apidata.results[current].question,
      answers: [["True"], ["False"]],
      cor_answer: decodeURIComponent(apidata.results[current].correct_answer),
      max: apidata.results.length,
      current: current + 1
    });
  }

  isRightAnswer() {
    this.setState({
      score: this.state.score + 1
    });
    this.getQuestion();
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
  /*added loading spinner*/
  render() {
    let { current, max, question } = this.state;
    return (
      <div className="Mquestions">
        <div>
          {this.state.loading === true ?
            (<div id="loadingSpinner">
                <Loader type="ThreeDots" color="white"/>
              </div>
            )
            :
            (<div id="questionsContainer">
              <h2>Questions {current}/{max}</h2>
              <p>{decodeURIComponent(question)}</p>
            </div>)}
          <div className="buttonBoxContainer">
            <div className="buttonBox">
              {this.state.answers.map(element => {
                  return (
                    <div>
                      <button className="answerButton" onClick={this.handleOnClick}>
                        {decodeURIComponent(element)}
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mquestions;
