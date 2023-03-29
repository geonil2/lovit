import styled from '@emotion/styled';
import FadeInUp from '../../components/animation/fadeInUp';
import { COLORS, FONT_SIZE } from '../../config/styles';

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const ConCtnr = styled.div``;

export const MainTit = styled(FadeInUp)`
  font-weight: 700;
  font-size: ${FONT_SIZE.xxl};
  color: ${COLORS.grayscale01};
  opacity: 0;
  transform: translate3d(0, 50%, 0);
`;
