import React, { useState } from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Movie from '../components/Movie';
import Movies from '../components/Movies';
import { StyledLink } from '../globalStyled/globalStyled';
import useSearch from '../hooks/useSearch';

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const Title = styled.div`
  text-align: center;
  padding: 50px 0;
  color: white;
  font-weight: bold;
  font-size: 40px;
`;

const SearchBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

const Search = styled.input`
  width: 30%;
  padding: 8px 14px;
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

const MoviesBox = styled.div`
  width: 800px;
  height: 500px;
  padding: 16px 24px;
  margin: 50px auto;
  overflow-y: scroll;
  background-color: #171b39;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #ffd000;
  }
`;

const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

export default function MainPage() {
  const { loading, searchMovieList } = useSearch();
  const [searchResult, setSearchResult] = useState([]);
  let timerId = '';

  const searchHandler = (keyword) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      searchMovieList(keyword, setSearchResult);
    }, 500);
  };

  return (
    <>
      <Banner text='환영합니다' />
      <Container>
        <Title>Find your movies!</Title>
        <SearchBox onSubmit={(event) => event.preventDefault()}>
          <Search
            type='text'
            onChange={(event) => searchHandler(event.target.value)}
          />
          <SearchButton>🔍</SearchButton>
        </SearchBox>
        {searchResult.length > 0 && (
          <MoviesBox>
            {loading ? (
              <Loading>로딩 중입니다...</Loading>
            ) : (
              <Movies>
                {searchResult.map((movie) => (
                  <StyledLink
                    key={movie.id}
                    to={`/movie/${movie.id}`}
                    state={movie}
                  >
                    <Movie movie={movie} />
                  </StyledLink>
                ))}
              </Movies>
            )}
          </MoviesBox>
        )}
      </Container>
    </>
  );
}
