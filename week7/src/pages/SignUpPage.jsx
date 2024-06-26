import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Message from '../components/Message';
import {
  checkAge,
  checkEmail,
  checkName,
  checkPassword,
  checkRePassword,
  checkUsername,
} from '../utils/checkFormat';

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

const MoveTo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.8rem;
  margin-top: 2rem;
  font-size: 0.75rem;
  color: white;
`;

const BoldLink = styled(Link)`
  font-weight: bold;
`;

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    username: '',
    password: '',
    passwordCheck: '',
  });

  const [message, setMessage] = useState({
    name: '',
    email: '',
    age: '',
    username: '',
    password: '',
    passwordCheck: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();

  const checkValidation = () => {
    return (
      checkName(formData.name) &&
      checkEmail(formData.email) &&
      checkUsername(formData.username) &&
      checkAge(formData.age) === undefined &&
      checkPassword(formData.password) === undefined &&
      checkRePassword(formData.password, formData.passwordCheck)
    );
  };

  const onSignUp = () => {
    axios
      .post('http://localhost:8080/auth/signup', formData, {
        headers: { 'Context-Type': 'application/json; charset=utf-8' },
      })
      .then(() => {
        alert('회원가입이 정상적으로 처리되었습니다!');
        navigate('/login');
      })
      .catch((error) => {
        alert(error.response.data.message);

        if (error.response.status === 409) {
          navigate('/login');
        }
      });
  };

  return (
    <section>
      <Wrapper>
        <Title>회원가입 페이지</Title>
        <Form>
          <Input
            name='name'
            type='text'
            value={formData.name}
            placeholder='이름을 입력해주세요'
            onChange={handleChange}
          />
          {formData.name && !checkName(formData.name) && (
            <Message message='이름은 문자열이어야 합니다.' />
          )}
          <Input
            name='username'
            type='text'
            value={formData.username}
            placeholder='아이디를 입력해주세요'
            onChange={handleChange}
          />
          {formData.username && !checkUsername(formData.username) && (
            <Message message='아이디는 최소 5자리 이상이어야 합니다.' />
          )}
          <Input
            name='email'
            type='text'
            value={formData.email}
            placeholder='이메일을 입력해주세요'
            onChange={handleChange}
          />
          {formData.email && !checkEmail(formData.email) && (
            <Message message='이메일 형식에 맞게 다시 입력해주세요' />
          )}
          <Input
            name='age'
            type='text'
            value={formData.age}
            placeholder='나이를 입력해주세요'
            onChange={(event) => {
              handleChange(event);
              setMessage((prev) => ({
                ...prev,
                age: checkAge(event.target.value),
              }));
            }}
          />
          {formData.age && checkAge(formData.age) !== undefined && (
            <Message message={message.age} />
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
          <Input
            name='passwordCheck'
            type='password'
            value={formData.passwordCheck}
            placeholder='비밀번호 확인'
            onChange={handleChange}
          />
          {formData.passwordCheck &&
            !checkRePassword(formData.password, formData.passwordCheck) && (
              <Message message='비밀번호를 다시 입력해주세요!' />
            )}
          <SubmitButton
            onClick={(event) => {
              event.preventDefault();
              onSignUp();
              // https: navigate('/login', { state: formData });
            }}
            disabled={!checkValidation()}
          >
            제출하기
          </SubmitButton>
        </Form>
        <MoveTo>
          <div>이미 아이디가 있으신가요?</div>
          <BoldLink to='/login'>로그인 페이지로 이동하기</BoldLink>
        </MoveTo>
      </Wrapper>
    </section>
  );
}
