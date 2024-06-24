import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MovieDetailContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(${(props) => props.$url}) no-repeat center/cover;
    opacity: 0.1;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const MovieDetail = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

const Poster = styled.img`
  width: 250px;
`;

const MovieInfoContainer = styled.div`
  flex: 1;
  height: 250px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MovieTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const MovieDetailSubTitle = styled.div``;

const MovieDetailOverview = styled.div`
  font-size: 0.8rem;
`;

export default function MovieDetailPage() {
  const { state: movie } = useLocation();
  const {
    poster_path,
    original_title,
    vote_average,
    release_date,
    overview,
    backdrop_path,
  } = movie;

  return (
    <MovieDetailContainer
      $url={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
    >
      <MovieDetail>
        <Poster src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
        <MovieInfoContainer>
          <MovieTitle>{original_title}</MovieTitle>
          <MovieDetailSubTitle>
            평점 {'⭐️'.repeat(Math.floor(vote_average))}
          </MovieDetailSubTitle>
          <MovieDetailSubTitle>개봉일 {release_date}</MovieDetailSubTitle>
          <MovieDetailSubTitle>줄거리</MovieDetailSubTitle>
          <MovieDetailOverview>
            {overview || 'TMDB에서 제공하는 API에 상세 줄거리가 없습니다'}
          </MovieDetailOverview>
        </MovieInfoContainer>
      </MovieDetail>
    </MovieDetailContainer>
  );
}
