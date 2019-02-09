import React, { Component } from 'react';
import UserList from '../user/UserList'

class MainTemplate extends Component {
  render() {
    return (
      <div className="layout mainTemplate">
        <div>
          <UserList></UserList>
        </div>
      </div>
    );
  }
}

export default MainTemplate;
