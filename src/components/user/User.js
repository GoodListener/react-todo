import React, { Component } from 'react';
import TodoForm from '../todo/TodoForm'
import TodoList from '../todo/TodoList'

class User extends Component {
  no = 1

  state = {
    input : '',
    todos : []
  }

  render() {
    const {input} = this.state;
    const { handleRemove } = this;
    const {handleChange, handleCreate, handleKeyPress} = this;

    return (
      <li className="user">
        {this.props.name}
        <button onClick={this.props.handleRemove}>delete</button>
        <TodoForm
          value={input}
          onChange={handleChange}
          onCreate={handleCreate}
          onKeyPress={handleKeyPress}
        />
        <TodoList
          todos={this.state.todos}
          handleRemove={handleRemove}
        />
      </li>
    );
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        no : this.no++,
        id: this.makeNewID(),
        name: input,
        checked: false
      })
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id)
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

  makeNewID = () => {
    return new Date().getTime();
  }
}

export default User;
