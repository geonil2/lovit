import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LIST } from '../../utils/const';

import * as S from './style';

const Nav = () => {
  return (
    <S.Nav>
      <S.NavUl>
        {NAV_LIST.map(({ title, path }) => (
          <S.NavLi>
            <Link to={path}>{title}</Link>
          </S.NavLi>
        ))}
      </S.NavUl>
    </S.Nav>
  );
};

export default Nav;
