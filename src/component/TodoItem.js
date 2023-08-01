import React, { useEffect, useState } from 'react'
import '../assets/styles/todoMain.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'; 

export function TodoItem({ todo, onChange, onDelete, selectAll }) {
  const [isChecked, setIsChecked] = useState(todo.isDone);

  useEffect(() => {
    setIsChecked(selectAll);
  }, [selectAll]);
  
  return (
    <div className='list-text-cont'>
        <label className={`label-list${isChecked ? ' line-text' : ''}`}>
            <span>{todo.title}</span>
            <div className='list-tools'>
              <input type='checkbox'
                checked={isChecked} 
                onChange={(e)=> {
                  setIsChecked(e.target.checked);
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
                }}><FontAwesomeIcon icon={faTrash} className='delete-icon' />
              </button>
            </div>
        </label>
    </div>
  )
}
