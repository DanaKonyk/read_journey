import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';

export const ModalWrap = styled.div`
  padding-block: 20px;
  inline-size: 335px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding-block: 30px;
    inline-size: 500px;
  }

  img {
    margin-block-end: 16px;
    inline-size: 137px;
    block-size: 208px;
    border-radius: 8px;

    @media screen and (min-width: 768px) {
      inline-size: 153px;
      block-size: 233px;
    }
  }

  h4 {
    margin-block-end: 2px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  h5 {
    margin-block-end: 4px;
    color: ${color.grey};
    font-size: 12px;
    line-height: 1.166;

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.285;
    }
  }

  h6 {
    margin-block-end: 20px;
    font-size: 10px;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
      margin-block-end: 32px;
    }
  }
`;
