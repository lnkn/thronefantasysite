import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <section className={this.props.className}>
        <div className="card__wrapper">
          <div className="card__content">
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}
export default Card;
