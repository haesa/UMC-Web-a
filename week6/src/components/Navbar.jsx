import React from 'react';
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

export default function Navbar() {
  const location = useLocation();
  const current = location.pathname.split('/')[1];

  return (
    <Header>
      <NavItem>
        <Link to='/'>UMC Movie</Link>
      </NavItem>
      <Nav>
        <NavItem $current={current === 'signup'}>
          <Link to='/signup'>회원가입</Link>
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
