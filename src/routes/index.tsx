import { Children, ElementType, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import AsyncBoundary from '../components/asyncBoundary';
import MainLayout from '../components/layout/main';

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <AsyncBoundary errorFallback={<></>} suspenseFallback={<></>}>
      <Component {...props} />
    </AsyncBoundary>
  );
};

const Main = Loadable(lazy(() => import('../pages/main')));
const Gallery = Loadable(lazy(() => import('../pages/gallery')));

const router = () => {
  return useRoutes([
    // Main Routes
    {
      path: '/',
      element: <MainLayout />,
      children: [{ element: <Main />, index: true }]
    },
    // Gallery Routes
    {
      path: '/gallery',
      element: <MainLayout />,
      children: [{ element: <Gallery />, index: true }]
    }
  ]);
};

export default router;
