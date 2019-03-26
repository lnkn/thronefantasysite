import React, { Component } from 'react';

class TheGame extends Component {
  render() {
    return (
     <div>
        <h1>The Game</h1> <hr/>
        <h2><span>Join 10,000+ players!</span><br/><br/>Build a team of your favorite characters and score points as they slaughter their enemies, conquer territory, eat chickens, drink wine, commit unspeakable incest and more!</h2>
        <p>Download the app to compete against your friends, enemies, family and the world in for fame and fortune and glory!</p>
     
        <div className="download">
          <a 
            href="https://itunes.apple.com/us/app/throne-fantasy/id1251792552?ls=1&mt=8"
            className="download__button ios">
            Play for Free on iOS</a>
          <a
            href="https://play.google.com/store/apps/details?id=com.solen.gotfantasy"
            className="download__button and">
             Play for Free on Android</a>
        </div>
     </div>

    );
  }
}
export default TheGame;
