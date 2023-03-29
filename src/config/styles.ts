import { keyframes } from '@emotion/react';

export const COLORS = {
  main: '#353030',
  grayscale01: '#f1f1f1',
  grayscale02: '#F8F8F8',
  grayscale03: '#E6E6E6',
  grayscale04: '#D5D5D5',
  grayscale05: '#B1B1b1',
  grayscale06: '#909090',
  grayscale07: '#6C6C6C',
  grayscale08: '#464646'
};

export const SHADOW = {
  basic: '8px 8px 15px rgba(0, 0, 0, 0.08)'
};

export const ANIMATIONS = {
  fadeInUp: keyframes`0% { opacity: 0;
    transform: translate3d(0, 100%, 0); } 100% { opacity: 1;
    transform: translate3d(0, 0, 0); }`,

  fadeOut: keyframes`0% { transform: translateX(0%); } 100% { transform: translateX(100%); }`,
  rotate: keyframes`0% { transform: rotate(0deg); } 25% { transform: rotate(8deg); } 50% { transform: rotate(0deg); } 75% { transform: rotate(8deg); } 100% { transform: rotate(0deg); }`
};

export const FONT_SIZE = {
  xxs: '10px',
  xs: '12px',
  s: '14px',
  m: '16px',
  l: '18px',
  xl: '20px',
  xxl: '22px',
  xxxl: '24px'
};
