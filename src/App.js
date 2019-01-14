import React, { Component } from 'react';
import MainTemplate from './components/main/MainTemplate'

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <div gridArea="rightMenu" background="brand" />
          <MainTemplate />
          <div gridArea="leftMenu" background="brand" />
        </React.Fragment>
    );
  }
}

export default App;
