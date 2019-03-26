import React, { Component } from 'react';

import ReactSVG from 'react-svg'
import logo from '../img/logo.svg'

class Hero extends Component {
  render() {
    return (
    <div>
         <ReactSVG src={logo}
          svgClassName="logo--svg"
          wrapper="div"
          className="logo--wrapper"
        />
    </div>
    );
  }
}
export default Hero;
