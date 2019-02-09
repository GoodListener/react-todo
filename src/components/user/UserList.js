import React, { Component } from 'react';
import User from './User'
import { UserConsumer } from '../../context/User'

class UserList extends Component {
  render() {
    const userList = (
    <UserConsumer>
      {
        (test) => (
          test.state.users.map(
            user => (
              <User
                key={user.key}
                name={user.name}
              />)
          )
        )
      }
    </UserConsumer>
  );

    return (
      <div>
        {userList}
      </div>
    )
  }

}

export default UserList;
