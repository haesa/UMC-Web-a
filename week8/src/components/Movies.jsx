import React from 'react';
import styled from 'styled-components';

const MoviesContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: center;
  gap: 24px;
`;

export default function Movies({ children }) {
  return <MoviesContainer>{children}</MoviesContainer>;
}
