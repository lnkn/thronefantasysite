import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Card from './components/Card';
import GetTheApp from './components/GetTheApp';
import Nav from './components/Nav';
import ScoringTable from './components/ScoringTable';
import Graveyard from './components/Graveyard';
import GotQuestions from './components/GotQuestions';
import Credits from './components/Credits';
import TheBlog from './components/TheBlog';
import TheHype from './components/TheHype';
import Hero from './components/Hero';
import TheGame from './components/TheGame'

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
       <div className="Home">
       <Simple/>
        {/* <Nav/> */}
        
        {/* <Card className="section__hero">
          <Hero/>
        </Card> */}
        {/* <Card className="section__thegame">
           <TheGame/>
        </Card>
        
        <Card className="section__thehype">
          <TheHype/>
        </Card>

        <Card className="section__therules">
          <ScoringTable/>
        </Card>

        <Card className="section__gotquestions">
          <GotQuestions/>
        </Card>

        <Card className="section__theblog">
          <TheBlog/>
        </Card>

        

        <Card className="section__graveyard">
          <Graveyard/>
        </Card>

        <Card className="section__thanks">
          <h1>THANKS FOR PLAYING</h1>
        </Card>

        <Card className="section__credits">
         <Credits/>
        </Card> */}

        </div>
      </div>
    );
  }
}

export default App;
