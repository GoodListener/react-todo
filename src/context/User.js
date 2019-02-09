import React, { Component } from 'react';

const { Provider, Consumer: UserConsumer } = React.createContext();

// Provider 에서 state 를 사용하기 위해서 컴포넌트를 새로 만들어줍니다.
class UserProvider extends Component {
  state = {
    users : []
  }

  actions = {
    setValue: (value) => {
      console.log(value);
      const { users } = this.state;
      this.setState({
        users: users.concat({
          id: new Date().getTime(),
          name: value,
          checked: false
        })
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

// 내보내줍니다.
export {
  UserProvider,
  UserConsumer,
};
