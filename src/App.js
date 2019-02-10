import React, { Component } from 'react';
import MainTemplate from './components/main/MainTemplate'
import LeftMenuTemplate from './components/leftMenu/LeftMenuTemplate'
import { UserProvider } from './context/UserContext'
import './App.scss'

class App extends Component {
  render() {
    return (
        <UserProvider>
          <LeftMenuTemplate/>
          <MainTemplate/>
          <div className="layout rightMenu">RIGHT</div>
        </UserProvider>
    );
  }
}

export default App;
