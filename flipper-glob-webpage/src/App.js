import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Home from './Component/Home';
import About from './Component/HistoryPage';
import Navigation from './Component/Navigation'
import Test from './Component/Test'
import firebase from './firebase.js';

import './App.css';

/*
 * This is the app that is called when the program is run
 * It currently only has a navigation bar and calls the other pages
 * to display the desired information
*/
class App extends Component {
  
  render() {
    return (
      <div>
        <Navigation/>
        {

        }
        <Route exact = {true} path = {'/'} component = {Home} />
        <Route exact = {true} path = {'/historyPage'} component = {About} />
        <Route exact = {true} path = {'/Test'} component = {Test} />
      </div>
    );
  }
}

export default App;