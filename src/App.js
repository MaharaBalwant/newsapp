import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import './App.css';
import News from './components/News';

export default class App extends Component {
  c = 'balwant';
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/business" element={<News pageSize={10} country="in" category="business"/>} />
            <Route path="/entertainment" element={<News pageSize={10} country="in" category="entertainment"/>} />
            <Route path="/general" element={<News pageSize={10} country="in" category="general"/>} />
            <Route path="/health" element={<News pageSize={10} country="in" category="health"/>} />
            <Route path="/science" element={<News pageSize={10} country="in" category="science"/>} />
            <Route path="/sports" element={<News pageSize={10} country="in" category="sports"/>} />
            <Route path="/technology" element={<News pageSize={10} country="in" category="technology"/>} />
          </Routes>
        </Router>
      </>
    )
  }
}

