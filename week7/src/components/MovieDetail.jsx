import React from 'react';
import styled from 'styled-components';

const Detail = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 30px 14px;
  font-size: 14px;
  color: rgb(192, 192, 192);
  background-color: black;
  opacity: 0;
  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;

const Overview = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export default function MovieDetail({ movie: { title, overview } }) {
  return (
    <Detail>
      <Title>{title}</Title>
      <Overview className='overview'>{overview}</Overview>
    </Detail>
  );
}
