import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppContainerStyled } from './App.styled';

import Loader from './Loader/Loader';

import Footer from './Section/Footer/Footer';
import Header from './Section/Header/Header';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const СollaborationPage = lazy(() =>
  import('../pages/СollaborationPage/СollaborationPage')
);

const appRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'collaboration',
    element: <СollaborationPage />,
  },
];

export const App = () => {
  return (
    <AppContainerStyled>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </AppContainerStyled>
  );
};
