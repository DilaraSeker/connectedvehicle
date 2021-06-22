import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class App extends Component {
  constructor(props){
    super(props);
   
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>       
          </Switch>
        </Router>
        
      </div>
        
      )
   
  }
}

