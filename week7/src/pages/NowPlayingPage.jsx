import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import Loading from '../components/Loading';
import Movie from '../components/Movie';
import Movies from '../components/Movies';
import { StyledLink } from '../globalStyled/globalStyled';
import useIntersect from '../hooks/useIntersect';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTA1NTdkMzBjYjA4MWM0NDkyMGU4Y2UzN2E0NTYwYyIsInN1YiI6IjYyZDdjMmUxMWRiYzg4MDMzNzQ3YjQ0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y4CBwxHTzS5FewbQnMKBsf2lS4S41Yxa8w9EAnNqHUY',
  },
};

const Target = styled.div`
  height: 100px;
`;

export default function NowPlayingPage() {
  const { data, hasNextPage, isFetching, fetchNextPage } = useInfiniteQuery({
    queryKey: ['now-playing'],
    queryFn: ({ pageParam }) =>
      axios
        .get(
          `https://api.themoviedb.org/3/movie/now_playing?language=ko&page=${pageParam}`,
          options
        )
        .then((res) => res?.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
  });

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const movies = useMemo(
    () => (data ? data.pages.flatMap((page) => page.results) : []),
    [data]
  );

  return (
    <Movies>
      {movies &&
        movies.map((movie) => (
          <StyledLink key={movie.id} to={`/movie/${movie.id}`} state={movie}>
            <Movie movie={movie} />
          </StyledLink>
        ))}
      {isFetching && <Loading />}
      <Target ref={ref} />
    </Movies>
  );
}
