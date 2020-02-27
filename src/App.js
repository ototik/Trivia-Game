import React from "react";
import "./App.css";
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
        <Routes />
      </div>
    );
  }
}

export default App;
