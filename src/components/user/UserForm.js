import React from 'react'
import './user.scss';

const UserForm = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="userForm">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <button onClick={onCreate}>add</button>
    </div>
  )
}

export default UserForm;
