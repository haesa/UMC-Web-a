import axios from 'axios';
import { useState } from 'react';

export default function useSearch() {
  const [loading, setLoading] = useState();

  const searchMovieList = (keyword, updateSearchResult) => {
    setLoading(true);
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
        updateSearchResult(res.data.results);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const searchMovieDetail = (id, updateSearchResult) => {
    setLoading(true);
    axios
      .all([
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=ko-KR`, {
          accept: 'application/json',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTA1NTdkMzBjYjA4MWM0NDkyMGU4Y2UzN2E0NTYwYyIsInN1YiI6IjYyZDdjMmUxMWRiYzg4MDMzNzQ3YjQ0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y4CBwxHTzS5FewbQnMKBsf2lS4S41Yxa8w9EAnNqHUY',
          },
        }),
        axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?language=ko-KR`,
          {
            accept: 'application/json',
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTA1NTdkMzBjYjA4MWM0NDkyMGU4Y2UzN2E0NTYwYyIsInN1YiI6IjYyZDdjMmUxMWRiYzg4MDMzNzQ3YjQ0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y4CBwxHTzS5FewbQnMKBsf2lS4S41Yxa8w9EAnNqHUY',
            },
          }
        ),
      ])
      .then(
        axios.spread((res1, res2) => {
          console.log(res1, res2);
          updateSearchResult({ ...res1.data, ...res2.data });
        })
      )
      .catch(console.err)
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    loading,
    searchMovieList,
    searchMovieDetail,
  };
}
