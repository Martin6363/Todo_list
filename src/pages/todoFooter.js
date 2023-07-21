import React from 'react'
import '../assets/styles/todoFooter.scss'


export  function TodoFooter({done, deleteAllTasks}) {
  return (
    <div className='footer-cont'>
        <div className='delete-button-cont'>
            <button onClick={done}>Delete done tasks</button>
            <button onClick={deleteAllTasks}>Delete all tasks</button>
        </div>
    </div>
  )
}
