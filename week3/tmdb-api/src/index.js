import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.js';
import './index.css';
import MainPage from './pages/MainPage.jsx';
import NowPlayingPage from './pages/NowPlayingPage';
import PopularPage from './pages/PopularPage';
import TopRatedPage from './pages/TopRatedPage';
import UpComingPage from './pages/UpComingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
