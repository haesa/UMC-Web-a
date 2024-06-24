import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import LoginPage from './pages/LoginPage.jsx';
import MainPage from './pages/MainPage.jsx';
import MovieDetailPage from './pages/MovieDetailPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import NowPlayingPage from './pages/NowPlayingPage.jsx';
import PopularPage from './pages/PopularPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import TopRatedPage from './pages/TopRatedPage.jsx';
import UpComingPage from './pages/UpComingPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/popular',
        element: <PopularPage />,
      },
      {
        path: '/now-playing',
        element: <NowPlayingPage />,
      },
      {
        path: '/top-rated',
        element: <TopRatedPage />,
      },
      {
        path: '/up-coming',
        element: <UpComingPage />,
      },
      {
        path: '/movie/:id',
        element: <MovieDetailPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignUpPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
