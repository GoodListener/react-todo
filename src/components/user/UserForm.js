import React, { Component } from 'react'
import './user.scss';
import { UserConsumer } from '../../context/UserContext'

class UserForm extends Component {
  state = {
    input : ''
  }

  ComponentDidMount() {
    this.setState({
      input: this.props.value,
    })
  }

  render() {
    return (
      <div className="userForm">
        <input
          value={this.state.input}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}/>
        <button
           onClick={this.handleCreate}
           >add</button>
      </div>
    );
  }

  handleCreate = () => {
    const { input } = this.state;
    const { value } = this.props;
    const users = value.concat({
      key: new Date().getTime(),
      name: input,
      checked: false
    })

    this.props.setValue(users);
    this.setState({
      input : ''
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }
}


const UserFormContainer = () => (
  <UserConsumer>
    {
      ({state, actions}) => (
        <UserForm
          value={state.users}
          setValue={actions.setValue}
        />
      )
    }
  </UserConsumer>
)

export default UserFormContainer;
