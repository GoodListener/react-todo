import React, { Component } from 'react';
import UserList from '../user/UserList'

class MainTemplate extends Component {
  render() {
    return (
      <div className="layout mainTemplate">
        <div>
          <UserList
            users={this.props.users}
            handleRemove={this.props.handleRemove}
          ></UserList>
        </div>
      </div>
    );
  }
}

export default MainTemplate;
