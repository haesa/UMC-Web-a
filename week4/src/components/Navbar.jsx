import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #28284b;
`;

const Nav = styled.nav`
  width: 450px;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.div`
  text-align: center;
  color: ${(props) => (props.$current ? '#ffd000' : 'white')};
  &:hover {
    font-size: 1.05rem;
  }
`;

const LoginBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #ffd000;
  font-size: 1rem;
  cursor: pointer;
`;

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  const current = location.pathname.split('/')[1];
  const handleLogin = () => setIsLogin((prev) => !prev);

  return (
    <Header>
      <NavItem>
        <Link to='/popular'>UMC Movie</Link>
      </NavItem>
      <Nav>
        <NavItem>
          <LoginBtn onClick={handleLogin}>
            {isLogin ? '로그아웃' : '로그인'}
          </LoginBtn>
        </NavItem>
        <NavItem $current={current === 'popular'}>
          <Link to='/popular'>Popular</Link>
        </NavItem>
        <NavItem $current={current === 'now-playing'}>
          <Link to='/now-playing'>Now Playing</Link>
        </NavItem>
        <NavItem $current={current === 'top-rated'}>
          <Link to='/top-rated'>Top Rated</Link>
        </NavItem>
        <NavItem $current={current === 'up-coming'}>
          <Link to='/up-coming'>Upcoming</Link>
        </NavItem>
      </Nav>
    </Header>
  );
}
