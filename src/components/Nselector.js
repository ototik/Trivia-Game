import React from "react";
import history from "./../history"

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 10, value: "", difficulty: "", type: "", apiUrl: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDiff = this.handleDiff.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleQuestionNum = this.handleQuestionNum.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleDiff(event) {
    this.setState({ difficulty: event.target.value });
  }

  handleType(event) {
    this.setState({ type: event.target.value });
  }

  handleQuestionNum(event) {
    this.setState({ number: event.target.value });
  }

  setUrl() {
    let { number, value, difficulty, type } = this.state
      this.setState({
        apiUrl: 'https://opentdb.com/api.php?amount=' +
                number +
                '&category=' +
                value +
                '&difficulty=' +
                difficulty +
                '&type=' +
                type +
                '&encode=url3986',
        
      })
      return console.log(this.state.apiUrl);
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    this.setUrl();
    history.push('/Mquestions');
    return console.log(this.state.apiUrl)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="number"
          min="1"
          max="50"
          onChange={this.handleQuestionNum}
          value={this.state.number}
        ></input>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </select>
        <select value={this.state.difficulty} onChange={this.handleDiff}>
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select value={this.state.type} onChange={this.handleType}>
          <option value="any">Any Type</option>
          <option value="multiple">Multiple</option>
          <option value="boolean">True / False</option>
        </select>
        <input type="submit" value="Let's play!" />
      </form>
    );
  }
}
export default Selector;
