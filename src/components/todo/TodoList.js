import React, { Component } from 'react';
import Todo from './Todo'

class TodoList extends Component {

  render() {
    const {todos, handleRemove} = this.props;
    const todoList = todos.map(
      ({name, checked, id, no}) =>
      <Todo
        key={id}
        name={name}
        checked={checked}
        no={no}
        handleRemove={() => handleRemove(id)}
        />
    )

    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoList;
