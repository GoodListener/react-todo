import React from 'react'

const UserForm = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <button onClick={onCreate}>add</button>
    </div>
  )
}

export default UserForm;
