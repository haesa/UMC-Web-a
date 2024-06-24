import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Movie from '../components/Movie';
import Movies from '../components/Movies';
import { StyledLink } from '../globalStyled/globalStyled';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTA1NTdkMzBjYjA4MWM0NDkyMGU4Y2UzN2E0NTYwYyIsInN1YiI6IjYyZDdjMmUxMWRiYzg4MDMzNzQ3YjQ0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y4CBwxHTzS5FewbQnMKBsf2lS4S41Yxa8w9EAnNqHUY',
  },
};

export default function PopularPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://api.themoviedb.org/3/movie/popular?language=ko&page=1',
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <Movies>
      {movies.map((movie) => (
        <StyledLink key={movie.id} to={`/movie/${movie.id}`} state={movie}>
          <Movie movie={movie} />
        </StyledLink>
      ))}
    </Movies>
  );
}
