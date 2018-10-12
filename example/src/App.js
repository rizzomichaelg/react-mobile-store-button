import React, { Component } from 'react';
import MobileStoreButton from '../../';
import logo from './logo.svg';
import './App.css';

const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';
const androidUrl = 'https://play.google.com';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">It{"'"}s Better in the App:</h1>
        </header>
        <div className="d-grid">
          <div className="grid-column">
            <MobileStoreButton store="ios" url={iOSUrl} linkProps={{title: "iOS Store Button"}} />
          </div>
          <div className="grid-column">
            <MobileStoreButton store="android" url={androidUrl} linkProps={{title: "Android Store Button"}} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
