import React, { Component } from 'react';
import UserForm from '../user/UserForm'

class LeftMenuTemplate extends Component {
  render() {
    return (
      <div className="layout leftMenu">
        <div>
          <UserForm/>
        </div>
      </div>
    );
  }
}

export default LeftMenuTemplate;
