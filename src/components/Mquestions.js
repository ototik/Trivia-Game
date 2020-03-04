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
      classN: "answerButton",
      current: 0,
      max: 0,
      score: 0,
      apidata: "",
      loading: true,
      clicked: false,
    };
    
    this.myRef = [];
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
          loading: false,
        });
        this.getQuestion();
      });
      
  }

  getQuestion() {
    let { current, apidata } = this.state;
    this.setState({ clicked: false })
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
      current: current + 1,
      classN: "answerButton",
    });
  }
  
  isBoolean() {
    let { current, apidata } = this.state;
    this.setState({
      question: apidata.results[current].question,
      answers: [["True"], ["False"]],
      cor_answer: decodeURIComponent(apidata.results[current].correct_answer),
      max: apidata.results.length,
      current: current + 1,
      classN: "answerButton"
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

  handleOnClick = event => {
    let { current, cor_answer, score, max } = this.state;
    let target = event.target.innerText;
    if (
      cor_answer === target &&
      max !== current
    ) {
      event.target.className = "answerButtonG"
      setTimeout(() => this.isRightAnswer(), 2000);
    } else if (
      cor_answer !== target &&
      max !== current
    ) {
      event.target.className = "answerButtonR"
      this.myRef[decodeURIComponent(cor_answer)].className = "answerButtonG"
      setTimeout(() => this.getQuestion(), 2000)
    } else if (
      cor_answer === target &&
      max === current
    ) {
      event.target.className = "answerButtonG"
      setTimeout(() => this.setState({ score: score + 1 }, () =>
        this.displayResults()), 2000)
    } else if (
      cor_answer !== target &&
      max === current
    ) {
      event.target.className = "answerButtonR"
      this.myRef[decodeURIComponent(cor_answer)].className = "answerButtonG"
      setTimeout(() => this.displayResults(), 2000)
    }
  };

  render() {
    let { current, max, question, loading } = this.state;
    return (
      <div className="Mquestions">
        <div>
          {loading === true
            ?
            (<div id="loadingSpinner">
              <Loader type="ThreeDots" color="white" />
            </div>
            )
            :
            (<div id="questionsContainer">
              <h2>Questions {current}/{max}</h2>
              <p>{decodeURIComponent(question)}</p>
            </div>
            )}
          <div className="buttonBoxContainer">
            <div  className="buttonBox">
              {this.state.answers.map(element => {
                let random = Math.random();
                return (
                  <div key={random}>
                    <button 
                    onClick={!this.state.clicked ? this.handleOnClick : null}
                    ref={myRef => this.myRef[decodeURIComponent(element)] = myRef}
                    id={decodeURIComponent(element)} 
                    className={this.state.classN}>
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
