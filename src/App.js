import React from "react";
import PopUp from "./Zsgameresult";

export default class App extends React.Component {
  state = {
    result: false
  };

  togglePop = () => {
    this.setState({
      result: !this.state.result
    });
  };

  render() {
    return (
      <div>
        <div className="resultbtn" onClick={this.togglePop}>
          <button className="resultButton">See the result</button>
        </div>
        {this.state.result ? <PopUp toggle={this.togglePop} /> : null}
      </div>
    );
  }
}
