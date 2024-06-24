import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Movie from '../components/Movie';
import Movies from '../components/Movies';
import { StyledLink } from '../globalStyled/globalStyled';

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

export default function MainPage() {
  const [searchResult, setSearchResult] = useState([]);
  const search = (keyword) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=ko-KR&page=1`,
        {
          accept: 'application/json',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTA1NTdkMzBjYjA4MWM0NDkyMGU4Y2UzN2E0NTYwYyIsInN1YiI6IjYyZDdjMmUxMWRiYzg4MDMzNzQ3YjQ0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y4CBwxHTzS5FewbQnMKBsf2lS4S41Yxa8w9EAnNqHUY',
          },
        }
      )
      .then((res) => {
        console.log(res);
        setSearchResult(res.data.results);
      });
  };

  return (
    <>
      <Banner text='환영합니다' />
      <Container>
        <Title>Find your movies!</Title>
        <SearchBox onSubmit={(event) => event.preventDefault()}>
          <Search
            type='text'
            onChange={(event) => search(event.target.value)}
          />
          <SearchButton>🔍</SearchButton>
        </SearchBox>
        {searchResult.length > 0 && (
          <MoviesBox>
            <Movies>
              {searchResult.map((movie) => (
                <StyledLink
                  key={movie.id}
                  to={`/movie-detail/${movie.original_title}`}
                  state={movie}
                >
                  <Movie movie={movie} />
                </StyledLink>
              ))}
            </Movies>
          </MoviesBox>
        )}
      </Container>
    </>
  );
}
