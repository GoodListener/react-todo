import React, { Component } from 'react';
import UserForm from '../user/UserForm'

class LeftMenuTemplate extends Component {
  id = 0 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: ''
  }

  render() {
    const {input} = this.state;
    const {handleCreate, handleKeyPress, handleChange} = this;
    return (
      <div className="layout leftMenu">
        <div>
          <UserForm 
            value={input}
            onCreate={handleCreate}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }

  handleCreate = () => {
    const { input } = this.state;
    this.props.handleCreate(input);
    this.setState({
      input: ''
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

export default LeftMenuTemplate;
