import React, { Component } from 'react';
import './Nav.css';
import ReactSVG from 'react-svg'
import nav_img from '../img/nav_img.svg'

class Nav extends Component {
  render() {
    return (
    <section className="nav">
      <div className="nav__content">
        <div className="logo">Throne<br/>Fantasy</div>
        <div className="data">
          <div className="season">Season<br/>8</div>
          <div className="draft">Draft Starts<br/>SOON™</div>
        </div>
        <hr/>
        
        <ReactSVG src={nav_img}
          svgClassName="nav__image--svg"
          wrapper="div"
          className="nav__image--wrapper"
        />
        </div>
    </section>
    );
  }
}
export default Nav;