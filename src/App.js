import React, { Component } from 'react';
import MainTemplate from './components/main/MainTemplate'

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <div className="rightMenu" />
          <MainTemplate />
          <div className="leftMenu" />
        </React.Fragment>
    );
  }
}

export default App;
