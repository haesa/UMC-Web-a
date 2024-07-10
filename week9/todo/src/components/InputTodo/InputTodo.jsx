import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../redux/todoSlice'
import styles from './InputTodo.module.css'

export default function InputTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  function handleText(e) {
    setText(e.target.value);
  }

  function onReset () {
    setText('');
  }

  return (
    <form className={styles.inputTodo} onSubmit={(e) => {
      e.preventDefault();
      if (text !== "") {
        dispatch(add(text));
      } else {
        alert("할 일을 입력해주세요!");
      }
      onReset();
    }}>
      <input type="text" value={text} onChange={handleText} />
      <button type="submit">+</button>
    </form>
  );
}