import { useSelector } from 'react-redux';
import { CartIcon } from '../constants/icons.jsx';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 5px 0;
  display: flex;
  justify-content: center;
  background-color: #635dfe;
`;

const Alignment = styled.div`
  width: 67%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const CartAmount = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a19dff;
  border-radius: 50px;
  color: white;
  font-size: 14px;
  position: absolute;
  top: -10px;
  right: -10px;
`;

const Position = styled.div`
  position: relative;
`;

export default function Header() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <HeaderContainer>
      <Alignment>
        <Title>UMC PlayList</Title>
        <Position>
          <CartIcon stroke='white' width={30} height={30} />
          <CartAmount>{cart.length}</CartAmount>
        </Position>
      </Alignment>
    </HeaderContainer>
  );
}