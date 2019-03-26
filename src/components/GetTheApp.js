
import React, { Component } from 'react';

class GetTheApp extends Component {
  render() {
    return (
     <div>
        <h1>The Download</h1> <hr/>
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
    );
  }
}
export default GetTheApp;
