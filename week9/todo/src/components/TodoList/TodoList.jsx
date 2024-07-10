import { useSelector, useDispatch } from 'react-redux'
import { remove , complete } from '../../redux/todoSlice'
import styles from './TodoList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function TodoList() {
  const todoList = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const trash = <FontAwesomeIcon icon={faTrashCan} />;

  console.log(todoList);

  const todoListView = todoList.map((todo, idx) => (
    <li className={styles.todo} key={todo.id}>
      <input className={styles.checkbox} type="checkbox"
        onChange={() => dispatch(complete(todo.id))} />
      <div className={styles.text}>{todo.complete === false ? <>{todo.text}</> : <del>{todo.text}</del>}</div>
      <button className={styles.deleteBtn} type="button" onClick={() => dispatch(remove(todo.id))}>{trash}</button>
    </li>
  ));

  return <ul className={styles.list}>{todoListView}</ul>;
}