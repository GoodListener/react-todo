import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return (
      <div>
        {this.props.name}
        {this.props.checked}
      </div>
    );
  }
}

export default Todo;
