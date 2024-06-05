import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';

export const Wrap = styled.div`
  margin: 10px 20px;
  background-color: ${color.lightBlack};
  border-radius: 30px;
  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    margin: 16px 32px;
    display: flex;
    justify-content: space-between;
    gap: 52px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`;

export const StatWrap = styled.div`
  @media screen and (max-width: 767px) {
    margin-block-start: 40px;
  }

  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const BtnStat = styled.button`
  inline-size: 16px;
  block-size: 16px;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    inline-size: 20px;
    block-size: 20px;
  }

  svg {
    inline-size: 16px;
    block-size: 16px;
    transition: stroke 350ms linear;
    @media screen and (min-width: 768px) {
      inline-size: 20px;
      block-size: 20px;
    }
  }

  svg:is(:hover, :focus, :active) {
    stroke: ${color.white};
  }
`;
