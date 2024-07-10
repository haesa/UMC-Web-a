import Header from './components/Header.jsx'
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import styled from 'styled-components';
import './App.css';

const Contents = styled.main`
  margin-bottom: 250px;
`;

const Title = styled.h2`
  margin: 50px 0;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <main>
      <Header />
      <Contents className='content'>
        <Title>당신이 선택한 음반</Title>
        <Content />
      </Contents>
      <Footer />
    </main>
  )
}

export default App
