import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './css.scss';

import Home from "~/components/Home";
import Intro from "~/components/Intro";
import Navgation from "~/components/Navgation";
import ErrorPage from "~/components/ErrorPage";
import About from "~/components/About";
import Contact from "~/components/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navgation />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/intro" component={Intro} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              
              <Route component={ErrorPage}/>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
