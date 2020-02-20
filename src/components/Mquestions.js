import React from 'react';
import axios from 'axios';

class Mquestions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question:   "",
            answers:    [],
            cor_answer: "",
            current:    0,
            max:        0,
            score:      0,
            apidata:    "",

        };
        this.getQuestion = this.getQuestion.bind(this);
        this.isRightAnswer = this.isRightAnswer.bind(this);
    }

    componentDidMount() {
        axios.get('https://opentdb.com/api.php?amount=10&category=26&difficulty=easy')
        .then(response => response.data)
        .then(data => {
            this.setState({
                apidata:  data
            })
            this.getQuestion();
        })
    
   }

    getQuestion() {
        let { current, apidata } = this.state;
        if (apidata.results[current].type === "multiple") {
                this.setState({
                    question:   apidata.results[current].question,
                    answers:    [[apidata.results[current].incorrect_answers[0]],
                                [apidata.results[current].incorrect_answers[1]],
                                [apidata.results[current].incorrect_answers[2]],
                                [apidata.results[current].correct_answer]].sort(() => Math.random() - 0.5),
                    cor_answer: apidata.results[current].correct_answer,           
                    max:        apidata.results.length,
                    current:    current + 1,
                })     
        }
        else {
                this.setState({
                    question:   apidata.results[current].question,
                    answers:    [["True"],
                                ["False"]],
                    cor_answer: apidata.results[current].correct_answer,           
                    max:        apidata.results.length,
                    current:    current + 1,
            }) 
            console.log(this.state.apidata.results[current].type)
        }       
    }
    
    isRightAnswer() {
        this.setState({
            score: this.state.score + 1,
        })
        this.getQuestion()
    }


    render() {
        let { current, max, score, answers, question, cor_answer } = this.state;
        return (
            <div>
                <div>
                    <h2>Questions {current}/{max} Score {score}/{max}</h2>
                    <p>{question}</p>
                </div>
                <div>
                    <ul>
                        <li onClick={event => { cor_answer === event.target.innerText ? this.isRightAnswer() : this.getQuestion()}}>
                                {answers[0]}
                        </li>
                        <li onClick={event => { cor_answer === event.target.innerText ? this.isRightAnswer() : this.getQuestion()}}>
                                {answers[1]}
                        </li>
                        <li onClick={event => { cor_answer === event.target.innerText ? this.isRightAnswer() : this.getQuestion()}}>
                                {answers[2]}
                        </li>
                        <li onClick={event => { cor_answer === event.target.innerText ? this.isRightAnswer() : this.getQuestion()}}>
                                {answers[3]}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Mquestions;