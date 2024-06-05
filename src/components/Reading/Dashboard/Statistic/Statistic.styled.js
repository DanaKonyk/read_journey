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
    justify-content: start;
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

export const Quote = styled.p`
  @media screen and (max-width: 1439px) {
    display: none;
  }
  margin-block-start: 20px;
  max-inline-size: 293px;
  color: ${color.grey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.285;
`;

export const StatsWrap = styled.div`
  position: relative;
  margin-block-start: 20px;
  padding: 20px;
  background-color: ${color.darkGray};
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-block-start: 16px;
    min-inline-size: 321px;
    padding: 28px;
  }
  @media screen and (min-width: 1440px) {
    padding: 20px;
    min-inline-size: 313px;
  }

  span {
    position: absolute;
    top: 69px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.111;
    @media screen and (min-width: 768px) {
      top: 87px;
      font-size: 20px;
      line-height: 1;
    }
    @media screen and (min-width: 1440px) {
      top: 100px;
    }
  }

  h4 {
    margin-block-end: 4px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.285;
    @media screen and (min-width: 768px) {
      margin-block-end: 8px;
      font-size: 20px;
      line-height: 1;
    }
  }

  h5 {
    color: ${color.grey};
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    @media screen and (min-width: 768px) {
      font-size: 12px;
      line-height: 1.166;
    }
  }
`;

export const CircleWrap = styled.div`
  margin-block-end: 21px;
  inline-size: 116px;
  block-size: 116px;
  @media screen and (min-width: 768px) {
    margin-block-end: 16px;
    inline-size: 138px;
    block-size: 138px;
  }
  @media screen and (min-width: 1440px) {
    margin-block: 10px 20px;
    inline-size: 168px;
    block-size: 168px;
  }
`;

export const PercentWrap = styled.div`
  display: flex;
  gap: 15px;
`;

export const Progress = styled.div`
  inline-size: 14px;
  block-size: 14px;
  border-radius: 4px;
  background-color: ${color.lightGreen};
`;
