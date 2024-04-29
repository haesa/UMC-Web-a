import React from 'react';
import './TodoItem.css';

export default function TodoItem({ todo, setTodos }) {
  return (
    <div className='todo-item'>
      <div>{todo.content}</div>
      <button
        className='todo-button'
        onClick={() => {
          if (todo.isDone) {
            setTodos((prev) => prev.filter((item) => item.id !== todo.id));
            return;
          }

          setTodos((prev) =>
            prev.map((item) =>
              item.id === todo.id ? { ...todo, isDone: !todo.isDone } : item
            )
          );
        }}
      >
        {todo.isDone ? '삭제' : '완료'}
      </button>
    </div>
  );
}
