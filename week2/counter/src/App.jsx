import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='count'>{count}</div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          console.log('increase가 클릭됨.');
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
          console.log('decrease가 클리됨.');
        }}
      >
        -1
      </button>
    </>
  );
}

export default App;
