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
      show: false,
      clicked: false,
      showGoodAnswer: false,
    };
    this.buttonRefs = [];
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
    this.buttonRefs[0] && this.buttonRefs[0].focus();
  }

  getQuestion() {
    this.setState({
      clicked: false,
      showGoodAnswer: false,  
    });
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
      current: current + 1,
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
  handleOnClick = (event => {
    let { apidata, current, cor_answer} = this.state; 
    this.setState({
      clicked: true
    });

    console.log(event.target.id);
    console.log(this.state.answers.indexOf(cor_answer));
    console.log(cor_answer);
    console.log(this.state.answers);


    if (
      cor_answer === event.target.innerText &&
      apidata.results.length !== current
    ) {
      this.setState({ showGoodAnswer: true });
      /* event.target.style.backgroundColor= 'green';
      setTimeout(() => this.setState({ showGoodAnswer: true }), 1000); */
      setTimeout(() => this.isRightAnswer(), 1000);
    } else if (
      cor_answer !== event.target.innerText &&
      apidata.results.length !== current
    ) {
      event.target.style.backgroundColor= 'red';
      setTimeout(() => this.setState({ showGoodAnswer: true }), 1000);
      setTimeout(() => this.getQuestion(), 3000);
      
    } else if (
      cor_answer === event.target.innerText &&
      apidata.results.length === current
    ) {
      this.setState({ showGoodAnswer: true });
      /* event.target.style.backgroundColor= 'green';
      setTimeout(() => this.setState({ showGoodAnswer: true }), 1000); */
      setTimeout(() => this.setState({ score: this.state.score + 1 }, () =>
        this.displayResults()), 1000)
    } else if (
      cor_answer !== event.target.innerText &&
      apidata.results.length === current
    ) {
      event.target.style.backgroundColor= 'red';
      setTimeout(() => this.setState({ showGoodAnswer: true }), 1000);
      setTimeout(() => this.displayResults(), 3000);
    }
  });



  /*added loading spinner*/
  render() {
    let { current, max, question } = this.state;
    return (
      <div className="Mquestions">
        <div>
          {this.state.loading === true
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
            {this.state.clicked === false || this.state.showGoodAnswer === false
            ?
            (<div className="buttonBox">
              {this.state.answers.map((element, i) => {
                return (
                  <div key={element} >
                    <button id={i} className='answerButton' onClick={!this.state.clicked ? this.handleOnClick : null} ref={ref => {this.buttonRefs[i] = ref;}}>
                      {decodeURIComponent(element)}
                    </button>
                  </div>
                );
              })}
            </div>
            )
            :
            (<div className="buttonBox">
                <button className='answerButton' onClick={null} style={{backgroundColor: 'green'}}>
                      {decodeURIComponent(this.state.cor_answer)}
                </button>

            </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Mquestions;

