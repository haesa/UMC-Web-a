import React from 'react';
import './Modal.css';

export default function Modal({ setModal }) {
  return (
    <div className='modal'>
      <div className='modal-box'>
        <div className='modal-title'>안녕하세요</div>
        <div className='modal-content'>모달 내용은 어쩌고 저쩌고...</div>
        <div className='close'>
          <button
            onClick={() => {
              setModal(false);
              console.log('모달이 꺼짐');
            }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
