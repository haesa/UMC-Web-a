import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
`;

const Head1 = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Text = styled.div`
  font-size: 0.8rem;
`;

const Italic = styled.div`
  font-style: italic;
`;

const MainLink = styled(Link)`
  font-size: 1.2rem;
`;

export default function NotFoundPage() {
  return (
    <NotFoundContainer>
      <Head1>Oops!</Head1>
      <Text>예상치 못한 에러가 발생했습니다; ·ࡇ·</Text>
      <Text>
        <Italic>Not Found</Italic>
      </Text>
      <Link to='/'>메인으로 이동하기</Link>
    </NotFoundContainer>
  );
}
