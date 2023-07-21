import React, { useState } from 'react';
import '../assets/styles/todoMain.scss';
import { TodoItem } from '../component/TodoItem';

export function TodoMain({ todos, onChange, onDelete}) {
  return (
    <div className='todo-Main'>
      <div className='main-title-cont'>
        <h2>TodoList</h2>
      </div>
      <div className='button-cont'>
        <button>All</button>
        <button>Done</button>
        <button>Todo</button>
      </div>
      <div className="list-cont">
        {
          todos.map((elem) => (
            <TodoItem 
              key={elem.id} 
              todo={elem} 
              onChange={onChange}
              onDelete={onDelete}
            />
        ))}
      </div>
    </div>
  );
}
