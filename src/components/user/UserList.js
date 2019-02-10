import React, { Component } from 'react';
import User from './User'
import { UserConsumer } from '../../context/UserContext'

class UserList extends Component {
  handleRemove = (key, users, actions) => {
    actions.setValue(users.filter((user) => user.key !== key));
  }

  render() {
    const userList = (
    <UserConsumer>
      {
        ({state, actions}) => (
          state.users.map(
            user => (
              <User
                key={user.key}
                name={user.name}
                handleRemove={() => {this.handleRemove(user.key, state.users, actions)}}
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
