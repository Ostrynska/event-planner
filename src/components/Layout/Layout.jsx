import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
