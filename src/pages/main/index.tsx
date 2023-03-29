import React, { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import * as S from './style';

const MainPage = () => {
  const { observe, unobserve } = useIntersectionObserver(() => {
    setActive(true);
  });
  const titRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    titRef.current && observe(titRef.current);

    return () => {
      titRef.current && unobserve(titRef.current);
    };
  }, []);

  return (
    <S.Main>
      <S.ConCtnr>
        <S.MainTit ref={titRef} active={active}>
          팬더의 세계에 오신 것을 환영합니다.
        </S.MainTit>
      </S.ConCtnr>
    </S.Main>
  );
};

export default MainPage;
