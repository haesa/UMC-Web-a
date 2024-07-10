import InputTodo from './components/InputTodo/InputTodo.jsx';
import TodoList from './components/TodoList/TodoList.jsx';
import styles from './App.module.css';

function App() {
  return <main className={styles.app}>
    <InputTodo />
    <TodoList />
  </main>;
}

export default App
