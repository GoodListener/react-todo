import React, { Component } from 'react';
import Todo from '../todo/Todo'

class User extends Component {
  state = {
    todos : [
      {
        id : 'aa',
        name : '할일1',
        checked: false
      },
      {
        id : 'bb',
        name : '할일2',
        checked: false
      },
      {
        id : 'cc',
        name : '할일3',
        checked: false
      }
    ]
  }

  render() {
    const {todos} = this.state;
    const todoList = todos.map(
      ({name, checked, id}) =>
      <Todo
        key={id}
        name={name}
        checked={checked}
        />
    )

    return (
      <div>
        {this.props.name}
        {todoList}
      </div>
    );
  }
}

export default User;
