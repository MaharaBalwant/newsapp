import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import News from './components/News';

export default class App extends Component {
  c = 'balwant';
  render() {
    return (
      <>
        <NavBar />
        <News pageSize={10}/>
      </>
    )
  }
}

