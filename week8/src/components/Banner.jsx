import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  width: 100%;
  padding: 100px 0;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  background-color: black;
`;

export default function Banner({ text }) {
  return <BannerContainer>{text}</BannerContainer>;
}
