import React from 'react';
import styled from 'styled-components';

const Board = styled.div`
  padding: 30px 0;
`;

const CastTitle = styled.div`
  text-align: center;
  color: white;
  font-weight: 600;
  font-size: 18px;
`;

const CastList = styled.div`
  margin: 50px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  grid-row-gap: 30px;
`;

const Cast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const CastImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50px;
`;

const CastName = styled.div`
  text-align: center;
  color: white;
  font-size: 12px;
`;

const CastDepartment = styled.div`
  color: white;
  font-size: 12px;
`;

export default function CastBoard({ movie }) {
  if (!movie) return null;

  return (
    <Board>
      <CastTitle>출연진 및 제작진</CastTitle>
      {movie.cast && (
        <CastList>
          {movie.cast.map(
            ({ id, original_name, profile_path, known_for_department }) => (
              <Cast key={id}>
                <CastImage
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s'
                  }
                  alt='profile'
                />
                <CastName>{original_name}</CastName>
                <CastDepartment>{known_for_department}</CastDepartment>
              </Cast>
            )
          )}
        </CastList>
      )}
    </Board>
  );
}
