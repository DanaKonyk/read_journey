import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';

export const Wrap = styled.div`
  margin: 10px 20px;
  padding: 40px 20px;
  border-radius: 30px;
  background: ${color.lightBlack};

  @media screen and (min-width: 768px) {
    margin: 16px 32px;
    padding: 40px;
  }

  @media screen and (min-width: 1440px) {
    inline-size: 100%;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 28px;
      line-height: 1.142;
    }
  }

  div {
    display: flex;
    gap: 8px;
  }
`;

export const BtnMove = styled.button`
  background-color: transparent;
  border: none;

  svg {
    inline-size: 32px;
    block-size: 32px;
    padding: 4px;
    border: 1px solid ${color.white};
    border-radius: 50%;
    fill: ${color.white};

    @media screen and (min-width: 768px) {
      inline-size: 40px;
      block-size: 40px;
    }
  }
`;

export const BooksList = styled.ul`
  margin-block-start: 22px;
  display: grid;
  grid-template: 248px / repeat(2, 137px);
  gap: 21px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-block-start: 20px;
    grid-template: repeat(2, 248px) / repeat(4, 137px);
    gap: 27px 25px;
  }
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template: repeat(2, 248px) / repeat(5, 137px);
    gap: 27px 20px;
  }
`;
