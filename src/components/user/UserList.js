import React, { Component } from 'react';
import User from './User'

class UserList extends Component {
  render() {
    const { users } = this.props;
    const { handleRemove } = this.props;
    const userList = users.map(
      ({id, name}) =>
        <User
          key={id}
          id={id}
          name={name}
          handleRemove={handleRemove}
        />

    )

    return (
      <div>
        {userList}
      </div>
    );
  }

}

export default UserList;
