import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';

const queryClient = new QueryClient();

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <Navbar />
        <Outlet />
      </AppContainer>
    </QueryClientProvider>
  );
}

export default App;
