import React, { useState } from 'react';
import './Input.css';

let id = 5;

export default function Input({ setTodos }) {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos((prev) => [...prev, { id: id++, content, isDone: false }]);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='add-todo'
        type='text'
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder='UMC 스터디 계획을 작성해보세요!'
      />
    </form>
  );
}
