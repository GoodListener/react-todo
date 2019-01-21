import React, { Component } from 'react';
import MainTemplate from './components/main/MainTemplate'
import LeftMenuTemplate from './components/leftMenu/LeftMenuTemplate'
import './App.scss'

class App extends Component {
  state = {
    users : []
  }

  render() {
    return (
        <React.Fragment>
          <LeftMenuTemplate
            users={this.state.users}
            handleCreate={this.handleCreate}
          />
          <MainTemplate
            users={this.state.users}
          />
          <div className="layout rightMenu">RIGHT</div>
        </React.Fragment>
    );
  }

  handleCreate = (input) => {
    const { users } = this.state;
    this.setState({
      users: users.concat({
        id: new Date().getTime(),
        name: input,
        checked: false
      })
    })
  }
}

export default App;
