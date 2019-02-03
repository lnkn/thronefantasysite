import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


import Nav from './components/Nav';
import ScoringTable from './components/ScoringTable'
import Graveyard from './components/Graveyard';


class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="Home">
        <Nav/>
        <section className="section__thegame">
          <div className="content">
            <h1>The Game</h1> <hr/>
            <h2><span>Join 10,000+ players!</span><br/><br/>Build a team of your favorite characters and score points as they slaughter their enemies, conquer territory, eat chickens, drink wine, commit unspeakable incest and more!</h2>
            <p>Download the app to compete against your friends, enemies, family and the world in for fame and fortune and glory!</p>
          </div>
        </section>
        
        <section className="section__gettheapp">
          <div className="content">
            <h1>Download</h1> <hr/>
            <p>Throne Fantasy is best played with everyone you know. Start a league with your friends, family, co-workers, or anyone!</p>
            <p>We wish you well in the wars to come.</p>
            <br/>
            <a className="appstorelink__ios" href="https://itunes.apple.com/us/app/throne-fantasy/id1251792552?ls=1&mt=8">
              iOS
            </a>
            <a className="appstorelink__android" href="https://play.google.com/store/apps/details?id=com.solen.gotfantasy">
              Android
            </a>
          </div>
        </section>

        <section className="section__therules">
          <div className="content">
            <h1>The Rules</h1>  <hr/>
            <ScoringTable/>
            </div>
        </section>

        <section className="section__gotquestions">
        <div className="content">
          <h1>GoT Questions?</h1><hr/>
          <p>Inquiries, priase, complaints?
            <br/>
            Hit us up on <a href="https://www.facebook.com/thronefantasy/">facebook messenger.</a>
          </p>
          </div>
        </section>

        <section className="section__graveyard">
          <div className="content">
            <h1>This project is dedicated to those who gave their lives.<br/>Thank you.</h1>
            <Graveyard/>
          </div>
        </section>

        <section className="section__thanks">
          <h1>THANKS FOR PLAYING</h1>
        </section>

        <section className="section__credits">
        <div className="content">
          MADE IN SEATTLE, WA USA - BY:
          <br/>
          <br/>
          <br/>
            <div className="section__credits--list">
              <span>Daniel</span>
              <span>Ryan</span>
              <span>Eric</span>
              <span>Lincoln</span>
              <span>Nick</span>
            </div>
          </div>
        </section>

        
        </div>
      </div>
    );
  }
}

export default App;
