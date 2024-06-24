import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.section``;

const Wrapper = styled.div`
  width: 33%;
  min-width: 350px;
  margin: 0 auto;
`;

const Title = styled.h3`
  color: white;
  font-size: 20px;
  text-align: center;
  margin-bottom: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 20px;
  border: none;
  outline: none;
`;

const SubmitButton = styled.button`
  padding: 1rem 0;
  margin-top: 2rem;
  border-radius: 50px;
  border: none;
  outline: none;
  background-color: #ffc53d;
  cursor: pointer;
  &:disabled {
    cursor: default;
    background-color: #878787;
  }
`;

export default function LoginPage() {
  const { state } = useLocation();
  console.log(state);

  return (
    <Container>
      <Wrapper>
        <Title> 로그인 페이지</Title>
        <Form>
          <Input type='text' placeholder='아이디' />
          <Input type='password' placeholder='비밀번호' />
          <SubmitButton>로그인</SubmitButton>
        </Form>
      </Wrapper>
    </Container>
  );
}
