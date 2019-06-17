import React, { Component } from 'react';
import UserStorage from '../storage/UserStorage'

const { Provider, Consumer: UserConsumer } = React.createContext();

class UserProvider extends Component {
  state = {
    users : JSON.parse(new UserStorage().getItem())
  }

  actions = {
    setValue: (value) => {
      this.setState({
        users: value
      });
      new UserStorage().saveItem(JSON.stringify(value));
    }
  }

  render() {
    console.log(this.state);
    const { state, actions } = this;
    const value = { state, actions };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  UserProvider,
  UserConsumer,
};
