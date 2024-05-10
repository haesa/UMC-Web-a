import React from 'react';
import { Link } from 'react-router-dom';
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

const LinkDiv = styled.div`
  text-align: center;
  &:hover {
    font-size: 1.05rem;
  }
`;

export default function Navbar() {
  return (
    <Header>
      <Link to='/popular'>UMC Movie</Link>
      <Nav>
        <LinkDiv>
          <Link to='/'>회원가입</Link>
        </LinkDiv>
        <LinkDiv>
          <Link to='/popular'>Popular</Link>
        </LinkDiv>
        <LinkDiv>
          <Link to='/now-playing'>Now Playing</Link>
        </LinkDiv>
        <LinkDiv>
          <Link to='/top-rated'>Top Rated</Link>
        </LinkDiv>
        <LinkDiv>
          <Link to='/up-coming'>Upcoming</Link>
        </LinkDiv>
      </Nav>
    </Header>
  );
}
