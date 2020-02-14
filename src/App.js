import React from 'react';
import Mquestions from './components/Mquestions';
import './App.css';

class App extends React.Component {
  getQuestion = async e => {
    e.preventDefault();
    const api_call = await fetch(this.apiUrl);
    const data = await api_call.json();
    console.log(data);
  };

  render() {
    return (
      <div>
        <Mquestions />
      </div>
    );
  }
}

export default App;
