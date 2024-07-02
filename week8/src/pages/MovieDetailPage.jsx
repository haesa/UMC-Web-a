import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CastBoard from '../components/CastBoard';
import useSearch from '../hooks/useSearch';

const MovieDetailContainer = styled.section`
  width: 100%;
  padding: 200px 0;
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

  @media only screen and (max-width: 600px) {
    & {
      padding: 50px 0;
    }
  }
`;

const MovieDetail = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  @media only screen and (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
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

  @media only screen and (max-width: 600px) {
    & {
      gap: 20px;
    }
  }
`;

const MovieTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const MovieDetailSubTitle = styled.div``;

const MovieDetailOverview = styled.div`
  font-size: 0.8rem;
`;

const Loading = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const { loading, searchMovieDetail } = useSearch();
  const {
    backdrop_path,
    poster_path,
    original_title,
    vote_average,
    release_date,
    overview,
  } = movie;

  useEffect(() => {
    searchMovieDetail(id, setMovie);
  }, [id]);

  if (loading) return <Loading>데이터를 받아오는 중 입니다</Loading>;

  return (
    <>
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
      <CastBoard movie={movie} />
    </>
  );
}
