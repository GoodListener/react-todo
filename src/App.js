import React, { Component } from 'react';
import MainTemplate from './components/main/MainTemplate'
import './App.scss'

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <div className="layout leftMenu">LEFT</div>
          <MainTemplate />
          <div className="layout rightMenu">RIGHT</div>
        </React.Fragment>
    );
  }
}

export default App;
