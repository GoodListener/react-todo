import React from 'react'

const TodoForm = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="userForm">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <button onClick={onCreate}>add</button>
    </div>
  )
}

export default TodoForm;
