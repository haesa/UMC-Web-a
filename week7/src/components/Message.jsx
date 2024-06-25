import React from 'react';
import styled from 'styled-components';

const MessageDiv = styled.div`
  font-size: 0.8rem;
  color: red;
`;

export default function Message({ message }) {
  return <MessageDiv>{message}</MessageDiv>;
}
