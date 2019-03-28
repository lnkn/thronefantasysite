import React, { Component } from 'react';
import './App.css';
import Simple from './components/Simple'
import SnowStorm from 'react-snowstorm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SnowStorm
          animationInterval = "50"
          snowCharacter = "■"
          excludeMobile = {false}
        />
        <Simple/>
      </div>
    );
  }
}

export default App;
