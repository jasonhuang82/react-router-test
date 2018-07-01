import React, { Component } from 'react';
import logo from '~/img/logo.svg';
import './css.scss';

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <header className="intro-header">
          <img src={logo} className="intro-logo" alt="logo" />
          <h1 className="intro-title">Welcome to React</h1>
        </header>
        <p className="intro-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Intro;
