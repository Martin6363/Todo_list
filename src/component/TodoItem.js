import React, { useState } from 'react'
import '../assets/styles/todoMain.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'; 

export function TodoItem({ todo, onChange, onDelete }) {
  const [isChecked, setIsChecked] = useState(todo.isDone);

  const [isLocalChecked, setIsLocalChecked] = useState(todo.isDone);
  if (isLocalChecked !== isChecked) {
    setIsLocalChecked(isChecked);
  }

  return (
    <div className='list-text-cont'>
        <label className={`label-list${isChecked ? ' line-text' : ''}`}>
            <span>{todo.title}</span>
            <div className='list-tools'>
              <input type='checkbox'
                checked={isChecked} 
                onChange={(e)=> {
                  setIsLocalChecked(e.target.checked);
                  setIsChecked(e.target.checked)
                  onChange({
                    ...todo,
                    isDone: e.target.checked
                  })
                }}
              />
              <button className='edit-btn'>
                <FontAwesomeIcon icon={faPen} className='edit-btn-icon'/>
              </button>
              <button className='delete-button'
                onClick={() => {
                  onDelete(todo);
              }}><FontAwesomeIcon icon={faTrash} className='delete-icon' /></button>
            </div>
        </label>
    </div>
  )
}
