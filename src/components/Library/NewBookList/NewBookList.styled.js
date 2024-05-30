import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';
import Select from 'react-select';

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
  }
`;

export const ListWrap = styled.div`
  display: flex;
  align-items: last baseline;
  gap: 14px;
`;

export const LibraryList = styled.ul`
  @media screen and (max-width: 1439px) {
    justify-content: center;
  }
  margin-block-start: 14px;
  display: flex;
  gap: 21px;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    gap: 25px;
  }

  @media screen and (min-width: 1440px) {
    gap: 20px;
  }
`;

export const NoBookWrap = styled.div`
  margin: 0 auto;
  padding-block: 60px;
  max-inline-size: 197px;
  text-align: center;

  @media screen and (min-width: 768px) {
    max-inline-size: 274px;
  }

  img {
    padding: 25px;
    margin-block-end: 10px;
    inline-size: 100px;
    block-size: 100px;

    display: inline-block;
    border-radius: 50%;
    background-color: ${color.darkGray};
    @media screen and (min-width: 768px) {
      margin-block-end: 20px;
      inline-size: 130px;
      block-size: 130px;
    }
  }

  p {
    font-size: 14px;
    line-height: 1.285;
    span {
      color: ${color.grey};
    }
  }
`;
