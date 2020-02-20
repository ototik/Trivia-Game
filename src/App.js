import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Routes from "./Routes";


class App extends React.Component {
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
        <Navigation />
       {/*  <Nselector />
        <Mquestions /> */}
        <Routes />
       {/*  <div className="resultbtn" onClick={this.togglePop}>
          <button className="resultButton">See the result</button>
        </div>
        {this.state.result ? <PopUp toggle={this.togglePop} /> : null} */}
      </div>
    );
  }
}


export default App;

