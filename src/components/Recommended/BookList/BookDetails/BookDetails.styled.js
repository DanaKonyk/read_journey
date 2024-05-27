import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';

export const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 20px;
  inline-size: 335px;

  @media screen and (min-width: 768px) {
    padding-block: 30px;
    inline-size: 500px;
  }

  img {
    inline-size: 137px;
    block-size: 208px;
    border-radius: 8px;
    margin-block-end: 16px;
    @media screen and (min-width: 768px) {
      inline-size: 153px;
      block-size: 233px;
    }
  }

  h4 {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    margin-block-end: 2px;
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  h5 {
    color: ${color.gray};
    font-size: 12px;
    line-height: 1.166;
    margin-block-end: 4px;
    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.285;
    }
  }

  h6 {
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    margin-block-end: 20px;
    @media screen and (min-width: 768px) {
      margin-block-end: 32px;
    }
  }
`;

export const BtnAdd = styled.button`
  padding: 12px 24px;
  background-color: transparent;
  border: 1px solid ${color.white};
  border-radius: 30px;
  transition: background-color 350ms linear, border 350ms linear;

  @media screen and (min-width: 768px) {
    padding: 14px 28px;
  }

  &:is(:hover, :focus) {
    background-color: ${color.white};
    border: 1px solid transparent;
    span {
      color: ${color.lightBlack};
    }
  }

  span {
    color: ${color.white};
    font-size: 14px;
    font-weight: 700;
    line-height: 1.285;
    transition: color 350ms linear;
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.125;
    }
  }
`;
