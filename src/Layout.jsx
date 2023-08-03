import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
