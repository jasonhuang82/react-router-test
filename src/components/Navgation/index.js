import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css.scss';


const Navgation = props => (
  <nav className="navgation">
    <div className="navgationRTitle">Navgation</div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/intro">Intro</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navgation;
