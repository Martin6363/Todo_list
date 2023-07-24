import React, { useEffect, useState } from 'react'
import { TodoHeader } from './pages/todoHeader'
import './App.css';
import { TodoMain } from './pages/todoMain';
import { TodoFooter } from './pages/todoFooter';
import { PropagateLoader } from 'react-spinners';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState([
    {
        title: 'Learn ReactJS basics',
        id: Math.random(),
        isDone: false
    },
    {
        title: 'Practice ReactJS',
        id: Math.random(),
        isDone: false
    },
    {
        title: 'Learn Redux',
        id: Math.random(),
        isDone: false
    },
    {
        title: 'Code portfolio in React',
        id: Math.random(),
        isDone: false
    },
    {
        title: 'Learn React Native',
        id: Math.random(),
        isDone: false
    }
])
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }, []);

    if (isLoading) {
      return (
        <div className="loader-container">
          <h2>Loading</h2>
          <PropagateLoader color="#14c2c3" size={25} />
        </div>
      );
    }
  return (
    <div className="App">
      <div className='wrapper'>
        <TodoHeader createList={(text) => {
          setList([
            ...list,
            {
              title: text,
              id: list?.length + 1,
              isDone: false
            }
          ])
        }}/>

        <TodoMain
          todos={list}
          onDelete={(todo) => {
            setList(list.filter((t) => t.id !== todo.id));
          }}
          onChange={(newTodo) => {
            setList(list.map((elem) => {
              if (elem.id === newTodo.id) {
                return newTodo;
              }
              return elem
            }
            ))
          }}
        />
        
        <TodoFooter
          done={() => {
            setList(list.filter((todo) => !todo.isDone));
          }} 
          deleteAllTasks={() => {
            setList(list.filter((task) => task.isDone))
          }}
        />
      </div>
    </div>
  );
}

export default App;
