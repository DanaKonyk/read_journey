import styled from 'styled-components';
import color from '../../stylesheet/GlobalColors';

export const Wrapper = styled.div`
  background: ${color.lightBlack};
  padding: 20px;
  padding-bottom: 0px;
  border-radius: 30px;
  margin-top: 10px;

  @media screen and (min-width: 375px) {
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1439px) {
    display: flex;
    height: 100%;
    padding: 80px 97px 0px 97px;
    max-width: 600px;
    margin-top: 0;
  }
`;
export const Images = styled.img`
  width: 393px;
  height: auto;
`;
export const Picture = styled.picture`
  display: block;
  @media only screen and (min-width: 1440px) {
    margin-top: 22px;
  }
`;
