import React from 'react';
import axios from 'axios';

class Mquestions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            answer: "",
            current: 0,
            max: 0,
            score: 0,

        };
        this.getQuestion = this.getQuestion.bind(this);
    }

    getQuestion() {
        axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
            .then(response => response.data)
            .then(data => {
                this.setState({
                    question: data.results[this.state.current].question,
                    answer: data.results[this.state.current].incorrect_answers + data.results[this.state.current].correct_answer,
                    max: data.results.length,
                    current: this.state.current + 1,
                })

            })
            
    }

    componentDidMount() {
        this.getQuestion();
        
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
                        <li>{this.state.answer}</li>
                        <li>{this.state.answer}</li>
                        <li>{this.state.answer}</li>
                        <li>{this.state.answer}</li>

                    </ul>
                </div>
            </div>
        )
    }
}

export default Mquestions;