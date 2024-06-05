import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';

export const ReadWrap = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 28px;
      line-height: 1.142;
    }
  }
`;

export const BookWrap = styled.div`
  margin-block-start: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-block-start: 32px;
    gap: 25px;
  }

  @media screen and (min-width: 1440px) {
    margin-block-start: 44px;
  }

  h4 {
    margin-block-end: 5px;
    max-inline-size: 146px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.285;
    @media screen and (min-width: 768px) {
      margin-block-end: 4px;
      max-inline-size: 320px;
      font-size: 20px;
      line-height: 1;
    }
  }

  h5 {
    margin-block-end: 20px;
    color: ${color.grey};
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    @media screen and (min-width: 768px) {
      margin-block-end: 16px;
      font-size: 14px;
      line-height: 1.285;
    }
    @media screen and (min-width: 768px) {
      margin-block-end: 25px;
    }
  }

  img {
    border-radius: 8px;
    inline-size: 137px;
    block-size: 208px;
    @media screen and (min-width: 768px) {
      inline-size: 169px;
      block-size: 256px;
    }
    @media screen and (min-width: 1440px) {
      inline-size: 224px;
      block-size: 340px;
    }
  }
`;

export const BtnStartStop = styled.button`
  inline-size: 40px;
  block-size: 40px;
  border: none;
  background: transparent;
  border-radius: 50%;
  cursor: auto;
  transition: 1s;

  @media screen and (min-width: 768px) {
    inline-size: 50px;
    block-size: 50px;
  }
  svg {
    inline-size: 40px;
    block-size: 40px;
    transition: 1s;
    @media screen and (min-width: 768px) {
      inline-size: 50px;
      block-size: 50px;
    }
  }
`;
