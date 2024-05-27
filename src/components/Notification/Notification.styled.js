import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';

export const NotifyWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 40px;
  inline-size: 335px;

  @media screen and (min-width: 768px) {
    padding-block: 30px;
    inline-size: 342px;
  }

  img {
    inline-size: 50px;
    block-size: 50px;
    margin-block-end: 20px;
    @media screen and (min-width: 768px) {
      inline-size: 68px;
      block-size: 70px;
      margin-block-end: 32px;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    margin-block-end: 10px;
    @media screen and (min-width: 768px) {
      font-size: 20px;
      margin-block-end: 14px;
    }
  }

  p {
    max-width: 250px;
    text-align: center;
    color: ${color.grey};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.285;
    margin-block-end: 4px;
    span {
      color: ${color.white};
    }
  }
`;
