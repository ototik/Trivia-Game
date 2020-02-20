import React, { Component } from 'react';
import './TNameInput.css';
import history from "./../history";

class TNameInput extends Component {
    constructor(props) {
      super(props);
      this.state = {
          playerName: "Dummy",
      };
    }
  
    onHandleChange(event) {
      let inp = event.target.value;
      inp = inp.replace(/[^\w\s]/gi, "");
      inp = inp.replace(/ /g, "");

      this.setState({
        playerName: inp
      });
    }
  
    onChangePlayerName(event) {
      history.push('/selector');
    }
  
    render() {
      return (
        <div className="Tcontainer">
          <label> Please choose a name: 
            <input type="text" value={this.state.playerName} name="playerName" size="30" minLength={3} maxLength={18} autocomplete="off" required
              onChange={(event) => this.onHandleChange(event)} />
          </label>
          <button onClick={this.onChangePlayerName.bind(this)}>That's me, let's go!</button>
        </div>
      );
    }
  }

  export default TNameInput;
