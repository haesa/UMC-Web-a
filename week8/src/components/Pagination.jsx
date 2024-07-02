import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

const Container = styled.div`
  width: 100px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const PrevButton = styled.button`
  width: 10px;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => (props.$page > 1 ? 'white' : '#FFFFFF50')};
  cursor: pointer;
`;

const NextButton = styled.button`
  width: 10px;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
`;

export default function Pagination({ page, setPage }) {
  return (
    <Container>
      <PrevButton
        $page={page}
        onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
      >
        <IoIosArrowBack />
      </PrevButton>
      <div>{page}</div>
      <NextButton onClick={() => setPage((prev) => prev + 1)}>
        {<IoIosArrowForward />}
      </NextButton>
    </Container>
  );
}
