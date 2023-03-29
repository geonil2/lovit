import React from 'react';
import { Outlet } from 'react-router-dom';

import * as S from './style';

import Header from '../../header';

const MainLayout = () => {
  return (
    <S.MainLayout>
      <Header />
      <Outlet />
    </S.MainLayout>
  );
};

export default MainLayout;
