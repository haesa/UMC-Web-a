import React from 'react';
import styled from 'styled-components';
import MovieDetail from './MovieDetail';

const MovieTile = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const MoviePoster = styled.img`
  width: 100%;
  height: 80%;
  margin: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const MovieInfo = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin: 0;
  color: white;
  font-size: 14px;
  background-color: rgb(77, 77, 136);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 10px;
`;

const MovieTitle = styled.div`
  width: 80%;
  box-sizing: border-box;
  text-wrap: wrap;
`;

const MoviePopularity = styled.div`
  font-weight: 500;
`;

export default function Movie({ movie }) {
  const { poster_path, title, vote_average } = movie;
  return (
    <MovieTile>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <MoviePopularity>{vote_average}</MoviePopularity>
      </MovieInfo>
      <MovieDetail movie={movie} />
    </MovieTile>
  );
}
