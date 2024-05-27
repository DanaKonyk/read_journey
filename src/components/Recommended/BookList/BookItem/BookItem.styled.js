import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';

export const CardWrap = styled.div`
  cursor: pointer;
  h4 {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.285;
    margin-block-end: 2px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-inline-size: 137px;
  }
  h5 {
    color: ${color.grey};
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  img {
    inline-size: 137px;
    block-size: 208px;
    border-radius: 8px;
    margin-block-end: 8px;
  }

  &:before {
    transition: all 0.5s ease;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #333;
    border-radius: 8px;
    transform: scale(0);
  }

  &:hover:before {
    opacity: 0.5;
    transform: scale(1);
  }

  &:after {
    transition: all 0.6s ease 0.2s;
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: 8px;
    border: 1px solid #aaa;
    border-radius: 8px;
    background: #000;
    opacity: 0;
    transform: scale(0);
  }

  &:hover:after {
    opacity: 0.35;
    transform: scale(1);
  }
`;
