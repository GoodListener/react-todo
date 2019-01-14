import React, { Component } from 'react';
import UserList from '../user/UserList'
import UserForm from '../user/UserForm'

class MainTemplate extends Component {
  id = 0 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    users: []
  }

  render() {
    const {input} = this.state;
    const {handleCreate, handleKeyPress, handleChange} = this;
    return (
      <React.Fragment>
        <div>
          <UserForm
            value={input}
            onCreate={handleCreate}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
          />
        </div>
        <div>
          <UserList users={this.state.users}></UserList>
        </div>
      </React.Fragment>
    );
  }

  handleCreate = () => {
    const { input, users } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      users: users.concat({
        id: this.id++,
        name: input,
        checked: false
      })
    });
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

export default MainTemplate;
