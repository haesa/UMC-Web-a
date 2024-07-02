import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import HAMBURGER_ICON from '../assets/svg/burgerIcon.svg';

const showUp = keyframes`
  to {
    transform: translateX(100%);
  }
  from {
    transform: translateX(0);
  }
`;

const showOut = keyframes`
  to {
     transform: translateX(0);
  }
  from {
    transform: translateX(100%);  
 }
`;

const Header = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: #28284b;
`;

const Nav = styled.nav`
  width: 450px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    & {
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: normal;
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1;
      background-color: rgb(35, 35, 78, 0.97);
      transform: translateX(100%);

      ${(props) =>
        props.$isVisible !== null &&
        css`
          animation: ${props.$isVisible ? showOut : showUp} 300ms forwards;
        `}
    }
  }
`;

const NavItem = styled.div`
  text-align: center;
  color: ${(props) => (props.$current ? '#ffd000' : 'white')};
  cursor: pointer;
  &:hover {
    font-size: 1.05rem;
  }

  @media only screen and (max-width: 600px) {
    & {
      padding: 16px;
      text-align: initial;
    }
  }
`;

const Icon = styled.img`
  display: none;

  @media only screen and (max-width: 600px) {
    & {
      display: block;
      width: 30px;
      height: 30px;
    }
  }
`;

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(null);
  const location = useLocation();
  const current = location.pathname.split('/')[1];
  const token = localStorage.getItem('token');
  const handleSidebar = () =>
    setIsVisible((prev) => (prev === null ? true : !prev));

  return (
    <Header>
      <Link to='/'>
        <NavItem>UMC Movie</NavItem>
      </Link>
      <Icon src={HAMBURGER_ICON} alt='hamburger icon' onClick={handleSidebar} />
      <Nav $isVisible={isVisible}>
        {token ? (
          <NavItem
            $current={current === 'logout'}
            onClick={() => {
              setIsVisible(false);
              localStorage.removeItem('token');
              alert('로그아웃 되었습니다.');
              window.location.reload();
            }}
          >
            로그아웃
          </NavItem>
        ) : (
          <>
            <Link to='/login' onClick={() => setIsVisible(false)}>
              <NavItem $current={current === 'login'}>로그인</NavItem>
            </Link>
            <Link to='/signup' onClick={() => setIsVisible(false)}>
              <NavItem $current={current === 'signup'}>회원가입</NavItem>
            </Link>
          </>
        )}
        <Link to='/popular' onClick={() => setIsVisible(false)}>
          <NavItem $current={current === 'popular'}>Popular</NavItem>
        </Link>
        <Link to='/now-playing' onClick={() => setIsVisible(false)}>
          <NavItem $current={current === 'now-playing'}>Now Playing</NavItem>
        </Link>
        <Link to='/top-rated' onClick={() => setIsVisible(false)}>
          <NavItem $current={current === 'top-rated'}>Top Rated</NavItem>
        </Link>
        <Link to='/up-coming' onClick={() => setIsVisible(false)}>
          <NavItem $current={current === 'up-coming'}>Upcoming</NavItem>
        </Link>
      </Nav>
    </Header>
  );
}
