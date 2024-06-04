import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';

export const ProgressWrap = styled.div`
  @media screen and (max-width: 767px) {
    margin-block-start: 40px;
  }
  max-width: 320px;
  h3 {
    margin-block-end: 14px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
  }

  p {
    margin-block-end: 20px;
    color: ${color.grey};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.285;
    @media screen and (min-width: 768px) {
      inline-size: 313px;
    }
  }

  img {
    margin: 0 auto;
    padding: 24px;
    border-radius: 50%;
    background-color: ${color.darkGray};
    inline-size: 80px;
    block-size: 80px;
  }
`;
