import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <h1>안녕하세요!</h1>
      <div className='content'>내용내용내용</div>
      <button
        onClick={() => {
          setModal(true);
          console.log('모달이 켜짐');
        }}
      >
        열기
      </button>
      {modal && <Modal setModal={setModal} />}
    </>
  );
}

export default App;
