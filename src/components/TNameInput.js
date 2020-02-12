import React from 'react';
import './TNameInput.css';

class TNameInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Dummy',
        displayValue: '' 
      };
    }
  
    handleChange(event) {
      let inp = event.target.value;
      inp = inp.replace(/[^\w\s]/gi, "");
      inp = inp.replace(/ /g, "");

      this.setState({
        value: inp
      });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.setState({
        displayValue: `Let's play, ${this.state.value}!`
      });
    }
  
    render() {
      return (
        <div className="Tcontainer">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor="playerName"> Please choose a name: </label>
            <div>
              <input type="text" name="playerName" size="30" minLength={3} maxLength={18} autocomplete="off" required value={this.state.value} onChange={this.handleChange.bind(this)} />
              <input type="submit" value="Submit" />
            </div>
          </form>
          <h2> {this.state.displayValue} </h2>
        </div>
      );
    }
  }

  export default TNameInput;