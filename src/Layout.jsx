import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
