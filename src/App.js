import React, { useEffect } from 'react';
import './App.css';
import Input from './app/components/Input';
import { useSelector } from 'react-redux';
import TodoItem from './app/components/TodoItem';
import { selectTodoList } from './features/todoSlice';


function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="app">
      <div className="app__container">
        <div className="add__todoContainer">
          {!todoList.length && <h1>No todos yet</h1>}
          {todoList.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
        <Input />
      </div>

    </div>
  );
}

export default App;
