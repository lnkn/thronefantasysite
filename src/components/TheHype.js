import React, { Component } from 'react';

class TheHype extends Component {
  render() {
    return (
     <div>
        <h1>The Hype</h1><hr/>
        <div className="userreview">
          <span>Anita J. </span><span className="userreview__stars">★★★★★</span> 
          <h3>I love it! Makes the season more fun!</h3>
        </div>
        <div className="userreview">
         <span>Katie F. </span><span className="userreview__stars">★★★★★</span> 
          <h3>Great idea. Easy to use, and my entire family and friends are using it together. Love it.</h3>
        </div>
        <div className="userreview">
          <span>Karen M. </span><span className="userreview__stars">★★★★★</span> 
          <h3>Really quick response from helpful staff when having login issues. Great app! 5 stars.</h3>
        </div>
        <div className="userreview">
          <span>Marius M. </span><span className="userreview__stars">★★★★★</span> 
          <h3>Seriously awesome app! Can't wait for the final season. Beautiful original design, and I had a lot of fun competing with my friends.</h3>
        </div>
        {/* <h3>Expo.io Featured App</h3>
        <p>Create and join Leagues with your friends to find who’s drafted the best team, and see if your team has what it takes to be shown in the global top 100!</p>
        <a href="https://blog.expo.io/featured-throne-fantasy-for-ios-and-android-cc40eced402f">Featured: Throne Fantasy for iOS and Android</a> */}
     </div>
    );
  }
}
export default TheHype;
