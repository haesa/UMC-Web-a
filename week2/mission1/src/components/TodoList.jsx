import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

export default function TodoList({ title, todos, setTodos }) {
  return (
    <div className='todos-container'>
      <h1 className='todos-title'>{title}</h1>
      <div className='todos'>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
}
