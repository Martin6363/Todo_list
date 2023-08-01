import React, { useState } from 'react';
import '../assets/styles/todoMain.scss';
import { TodoItem } from '../component/TodoItem';

export function TodoMain({ todos, onChange, onDelete }) {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);

    const updateTodos = todos.map((todo) => ({
      ...todo,
      isDone: !selectAll
    }))
    onChange(updateTodos);
  }
  return (
    <div className='todo-Main'>
      <div className='main-title-cont'>
        <h2>TodoList</h2>
      </div>
      <div className='button-cont'>
        <button onClick={handleSelectAll}>All</button>
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
              selectAll={selectAll}
            />
        ))}
      </div>
    </div>
  );
}
