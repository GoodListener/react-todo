import React, { Component } from 'react'
import './user.scss';
import { UserConsumer } from '../../context/User'

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
    this.props.setValue(input);
  }

  // handleCreate = () => {
  //   const { input } = this.state;
  //   this.props.handleCreate(input);
  //   this.setState({
  //     input: ''
  //   });
  // }

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
          value={state.user}
          setValue={actions.setValue}
        />
      )
    }
  </UserConsumer>
)

export default UserFormContainer;
