import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';

export const DiaryWrap = styled.div`
  @media screen and (max-width: 767px) {
    margin-block-start: 40px;
  }

  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const ItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 170px;

  @media screen and (min-width: 768px) {
    gap: 102px;
  }

  @media screen and (min-width: 1440px) {
    gap: 126px;
  }
`;

export const SpinnerWrap = styled.div`
  padding-inline-start: 125px;
`;

export const DataWrap = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  gap: 10px;

  svg {
    inline-size: 16px;
    block-size: 16px;

    @media screen and (min-width: 768px) {
      inline-size: 20px;
      block-size: 20px;
    }
  }

  div h4 {
    margin-block-end: 17px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.333;
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.285;
    }
  }

  div h5 {
    margin-block-end: 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.285;
    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 1;
    }
  }

  div h6 {
    margin-block-end: 4px;
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

export const Line = styled.div`
  position: absolute;
  z-index: -1;
  width: 2px;
  height: 115%;
  left: 7px;
  background: ${color.liteWhite};

  @media screen and (min-width: 768px) {
    left: 9px;
  }
`;

export const DiagramWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }

  div h4 {
    margin-block-end: 16px;
    color: ${color.grey};
    font-size: 12px;
    font-weight: 500;
    line-height: 1.333;
    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.285;
    }
  }

  div svg {
    margin-block-end: 7px;
    inline-size: 46px;
    block-size: 18px;
    @media screen and (min-width: 768px) {
      inline-size: 59px;
      block-size: 24px;
    }
  }

  div h5 {
    max-inline-size: 46px;
    color: ${color.grey};
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    @media screen and (min-width: 768px) {
      max-inline-size: 59px;
      font-size: 12px;
      line-height: 1.166;
    }
  }
`;

export const BtnDelete = styled.button`
  inline-size: 14px;
  block-size: 14px;
  background: transparent;
  border: none;

  svg {
    inline-size: 14px;
    block-size: 14px;
    stroke: ${color.grey};
    fill: transparent;
    transition: stroke 350ms linear;
  }

  svg:is(:hover, :focus, :active) {
    stroke: ${color.red};
  }
`;
