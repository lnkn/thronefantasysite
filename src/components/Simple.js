import React, { Component } from 'react';

import ReactSVG from 'react-svg'
import logo from '../img/logo-grad.svg'
import appstore from '../img/appstore-ios.svg'
import playstore from '../img/appstore-play.svg'

import './simple.css'

class Simple extends Component {
  render() {
    return (
    <div className="simple">
      <ReactSVG src={logo}
      svgClassName="logo--svg"
      wrapper="div"
      className="logo--wrapper"
      />
    <h3>Join Us For The Final Season</h3><br/>
    <h3>Download And Draft For Free</h3>
    <div className="storeicons--container">
      <a className="appstorelink__android" href="https://play.google.com/store/apps/details?id=com.solen.gotfantasy">
        <ReactSVG src={playstore}
          svgClassName="playstore--svg"
          wrapper="div"
          className="playstore--wrapper"
          />
      </a>
      <a className="appstorelink__ios" href="https://itunes.apple.com/us/app/throne-fantasy/id1251792552?ls=1&mt=8">
        <ReactSVG src={appstore}
          svgClassName="appstore--svg"
          wrapper="div"
          className="appstore--wrapper"
          />
      </a>
    </div>
    <h4>valar morghulis</h4>
    <h4>valar dohaeris</h4>
    </div>
    );
  }
}
export default Simple;
