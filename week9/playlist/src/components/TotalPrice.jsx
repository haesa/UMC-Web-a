import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Margin = styled.div`
  margin-bottom: 30px;
`;

const Line = styled.div`
  height: 1px;
  margin: 10px auto;
  background-color: black;
`;

const Alignment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.span`
  font-weight: bold;
`;

export default function TotalPrice() {
  const {total} = useSelector((state) => state.cart);

  return (
    <Margin>
      <Line />
      <Alignment>
        <Text>총 가격</Text>
        <Text>₩ {total}</Text>
      </Alignment>
    </Margin>
  );
}