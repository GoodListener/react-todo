import React, { Component } from 'react';
import Todo from '../todo/Todo'
import TodoForm from '../todo/TodoForm'

class User extends Component {
  state = {
    input : '',
    todos : []
  }

  render() {
    const {input, todos} = this.state;
    const todoList = todos.map(
      ({name, checked, id}) =>
      <Todo
        key={id}
        name={name}
        checked={checked}
        />
    )
    const {handleChange, handleCreate, handleKeyPress, handleRemove} = this;

    return (
      <div>
        {this.props.name}
        <button onClick={handleRemove}>delete</button>
        <TodoForm
          value={input}
          onChange={handleChange}
          onCreate={handleCreate}
          onKeyPress={handleKeyPress}
        />
        {todoList}
      </div>
    );
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.makeNewID(),
        name: input,
        checked: false
      })
    });
  }

  handleRemove = () => {
    this.props.handleRemove(this.props.id);
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

  makeNewID = () => {
    return new Date().getTime();
  }
}

export default User;
