import React from 'react';
import styled from '@emotion/styled';
import { ANIMATIONS } from '../../../config/styles';

interface IAnimationProps {
  active: boolean;
}

const FadeInUp = styled.div<IAnimationProps>`
  opacity: 0;
  transform: translate3d(0, 100%, 0);
  animation-name: ${({ active }) => active && ANIMATIONS.fadeInUp};
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export default FadeInUp;
