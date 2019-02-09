import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return (
      <div>
        {this.props.no}.
        {this.props.name}
        {this.props.checked}
        <button onClick={this.props.handleRemove}>delete</button>
      </div>
    );
  }
}

export default Todo;
