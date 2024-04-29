import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: 'Send E-mail', isDone: false },
    { id: 2, content: 'Make Work-Books', isDone: false },
    { id: 3, content: 'Sleeping', isDone: true },
    { id: 4, content: 'Watching You-Tube', isDone: true },
  ]);

  return (
    <div className='app'>
      <h1 className='title'>UMC Study Plan</h1>
      <Input setTodos={setTodos} />
      <div className='todo-container'>
        <TodoList
          title='해야할 일'
          todos={todos.filter((todo) => !todo.isDone)}
          setTodos={setTodos}
        />
        <TodoList
          title='해낸 일'
          todos={todos.filter((todo) => todo.isDone)}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default App;
