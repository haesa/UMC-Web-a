import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Message from '../components/Message';
import { checkPassword, checkUsername } from '../utils/checkFormat';

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
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [message, setMessage] = useState({
    username: '',
    password: '',
  });

  const checkValidation = () => {
    return (
      checkUsername(formData.username) &&
      checkPassword(formData.password) === undefined
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onLogin = () => {
    axios
      .post('http://localhost:8080/auth/login', formData)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        alert('로그인에 성공했습니다!');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title> 로그인 페이지</Title>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            onLogin();
          }}
        >
          <Input
            name='username'
            type='text'
            value={formData.username}
            placeholder='아이디'
            onChange={handleChange}
          />
          {formData.username && !checkUsername(formData.username) && (
            <Message message='아이디를 입력해주세요' />
          )}
          <Input
            name='password'
            type='password'
            value={formData.password}
            placeholder='비밀번호를 입력해주세요'
            onChange={(event) => {
              handleChange(event);
              setMessage((prev) => ({
                ...prev,
                password: checkPassword(event.target.value),
              }));
            }}
          />
          {formData.password &&
            checkPassword(formData.password) !== undefined && (
              <Message message={message.password} />
            )}
          <SubmitButton
            onClick={(event) => {
              event.preventDefault();
              onLogin();
            }}
            disabled={!checkValidation()}
          >
            로그인
          </SubmitButton>
        </Form>
      </Wrapper>
    </Container>
  );
}
