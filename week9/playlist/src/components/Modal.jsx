import { useSelector, useDispatch } from 'react-redux';
import { close } from '../redux/modalSlice.js';
import { clear } from '../redux/cartSlice.js';
import BlueButton from './BlueButton.jsx';
import RedButton from './RedButton.jsx';
import styled from 'styled-components';

const ModalContainer = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: #00000080;
 position: fixed;
 top: 0;
 left: 0;
`;

const ModalContent = styled.div`
 width: 350px;
 padding: 30px;
 background-color: white;
 border-radius: 8px;
`;

const Title = styled.h3`
  margin: 0 0 20px 0;
  font-weight: bold;
  text-align: center;
`;

const Alignments = styled.div`
  width: 250px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Width = styled.div`
width: 100px;
`;

export default function Modal() {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <Title>담아두신 모든 음반을 삭제하시겠습니까?</Title>
        <Alignments>
          <BlueButton onClick={() => {
            dispatch(clear());
            dispatch(close());
          }}>네</BlueButton>
          <RedButton onClick={()=> dispatch(close())}>아니오</RedButton>
        </Alignments>
      </ModalContent>
    </ModalContainer>
  );
}