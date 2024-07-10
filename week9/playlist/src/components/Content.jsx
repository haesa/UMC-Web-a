import { useSelector, useDispatch } from 'react-redux';
import { open } from '../redux/modalSlice.js';
import PlayList from './PlayList.jsx'
import TotalPrice from './TotalPrice.jsx';
import RedButton from './RedButton.jsx';
import styled from 'styled-components';
import Modal from './Modal.jsx';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Content() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cart.length < 1) { 
    return <Center>고객님이 좋아하는 음반을 담아보세요~!</Center>;
  }

  return (
    <>
      <PlayList />
      <TotalPrice />
      <Center>
        <RedButton onClick={()=> dispatch(open())}>장바구니 초기화</RedButton>
      </Center>
      <Modal />
    </>
  );
}