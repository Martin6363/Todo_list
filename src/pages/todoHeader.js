import React, { useRef, useState } from 'react'
import '../assets/styles/todoHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'; 


export function TodoHeader({createList}) {
    const [text, setText] = useState("");
    const inputRef = useRef('');

    const handleAddTask = (e) => {
        if (text.trim() !== "") {
          createList(text);
          setText("");
        } else {
            inputRef.current.focus()
        }
    };
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <div className='todo-Header'>
            <div className='header-title'>
                <h1>TodoInput</h1>
            </div>
            <div className='header-form'>
                <div className='form-input-cont'>
                    <div className='form-input'>
                        <button className='input-button'>
                            <FontAwesomeIcon icon={faBook} className='book-icon'/>
                        </button>
                        <input type='text' className='input'
                            value={text}
                            onChange={(e) => {
                                setText(e.target.value)
                            }} 
                            onKeyPress={handleKeyPress}
                            placeholder='New Todo'
                            ref={inputRef}
                        />
                    </div>
                    <div className='form-button-cont'>
                        <button className='add-button' onClick={handleAddTask}>Add new task</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

