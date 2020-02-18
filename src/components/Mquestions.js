import React from 'react';
import axios from 'axios';

class Mquestions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            answers: [],
            current: 0,
            max: 0,
            score: 0,

        };
        this.getQuestion = this.getQuestion.bind(this);
    }

    componentDidMount() {
        this.getQuestion();

    }



    getQuestion() {
        axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
            .then(response => response.data)
            .then(data => {
                this.setState({
                    question: data.results[this.state.current].question,
                    answers: [  [data.results[this.state.current].incorrect_answers[0]],
                                [data.results[this.state.current].incorrect_answers[1]],
                                [data.results[this.state.current].incorrect_answers[2]],
                                [data.results[this.state.current].correct_answer]].sort(() => Math.random() - 0.5),
                    max: data.results.length,
                    current: this.state.current + 1,

                })

            })

    }

    render() {
        return (
            <div>
                <div>
                    <h2>Questions {this.state.current}/{this.state.max} Score {this.state.score}/{this.state.max}</h2>
                    <p>{this.state.question}</p>
                </div>
                <div>
                    <ul>
                        <li onClick={event => {
                                console.log("the event works")}}>
                            {this.state.answers[0]}</li>
                        <li>{this.state.answers[1]}</li>
                        <li>{this.state.answers[2]}</li>
                        <li>{this.state.answers[3]}</li>

                    </ul>
                </div>
            </div>
        )
    }
}

export default Mquestions;