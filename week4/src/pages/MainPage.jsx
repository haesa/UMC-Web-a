import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';

const Container = styled.div`
  margin: 0 auto;
  width: 30%;
`;

const Title = styled.div`
  text-align: center;
  padding: 50px 0;
  color: white;
  font-weight: bold;
  font-size: 40px;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
`;

const Search = styled.input`
  flex: 1;
  padding: 8px 10px;
  border-radius: 50px;
  border: none;
  outline: none;
`;

const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 100%;
  border: none;
  outline: none;
`;

export default function MainPage() {
  return (
    <>
      <Banner text='환영합니다' />
      <Container>
        <Title>Find your movies!</Title>
        <SearchBox>
          <Search type='text' />
          <SearchButton>🔍</SearchButton>
        </SearchBox>
      </Container>
    </>
  );
}
