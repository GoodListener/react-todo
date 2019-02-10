import React, { Component } from 'react';

const { Provider, Consumer: UserConsumer } = React.createContext();

class UserProvider extends Component {
  state = {
    users : []
  }

  actions = {
    setValue: (value) => {
      this.setState({
        users: value
      });
    }
  }

  render() {
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
