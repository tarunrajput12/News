import './App.css';

import React, { Component } from 'react'
import Header from './Components/Header';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <News/>
      </div>
    )
  }
}

