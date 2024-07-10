import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, remove, calculateTotal } from '../redux/cartSlice';
import { ChevronDown, ChevronUp } from '../constants/icons';
import styled from 'styled-components';

const PlayListContainer = styled.ul`
  padding: 0;
  margin-bottom: 70px;
  list-style-type: none;
`;

const PlayItem = styled.li`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Alignment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Flex = styled.div`
  flex: 1;
`;

const SongAlbum = styled.img`
  width: 100px;
  height: 100px;
`;

const SongTitle = styled.p`
  margin: 0;
  font-weight: 500;
`;

const SongPrice = styled.span`
  color: gray;
`;

const SongAmount = styled.span `
  text-align: center;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export default function PlayList() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  return (
    <PlayListContainer>
      {cart.map((item) => <PlayItem key={item.id}>
        <SongAlbum src={item.img} alt={item.title} />
        <Flex>
          <Alignment>
            <SongTitle>{item.title}</SongTitle>
            <SongPrice>₩ {item.price}</SongPrice>
          </Alignment>
        </Flex>
        <Alignment>
          <ChevronUp onClick={() => {
            dispatch(increase(item.id)); 
            dispatch(calculateTotal()); 
          }} stroke='#635dfe' width={20} height={20} />
          <SongAmount>{item.amount}</SongAmount>
          <ChevronDown onClick={() => {
            if (item.amount > 1) { 
              dispatch(decrease(item.id)); 
            } else {
              dispatch(remove(item.id));
            }
            dispatch(calculateTotal()); 
          }} stroke='#635dfe' width={20} height={20} />
        </Alignment>
      </PlayItem>)}
    </PlayListContainer>
  );
}