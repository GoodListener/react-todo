import React, { Component } from 'react';
import MainTemplate from './components/main/MainTemplate'
import './App.scss'

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <div className="rightMenu"/>
          <MainTemplate className="mainTemplate"/>
          <div className="leftMenu"/>
        </React.Fragment>
    );
  }
}

export default App;
