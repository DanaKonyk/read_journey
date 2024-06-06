import styled from 'styled-components';
import color from '../../stylesheet/GlobalColors';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 1439px) {
    flex-direction: row;
    padding: 22px;
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const FormWrap = styled.div`
  background: ${color.lightBlack};
  padding: 20px;
  padding-bottom: 40px;
  border-radius: 30px;

  @media screen and (min-width: 375px) {
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 40px 168px 114px 64px;
  }
  @media screen and (min-width: 1439px) {
    padding: 54px;
    max-width: 600px;
    margin-right: 16px;
    max-height: 729px;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 40px;
  
    @media screen and (min-width: 768px) {
      margin-bottom: 157px;
    }

    @media screen and (min-width: 1439px) {
      margin-bottom: 80px;
    }
  }
`;

export const Logo = styled.svg`
  width: 42px;
  height: 17px;
`;

export const TextLogo = styled(Link)`
  display: none;
  @media screen and (min-width: 1439px) {
    display: flex;
    font-size: 18px;
    font-weight: 500;
    color: ${color.white};
    margin-left: 4px;
    text-decoration: none;
  }
`;

export const Text = styled.p`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 64px;
    font-weight: 700;
    width: 444px;
    margin-bottom: 35px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 43px;
    width: 100%;
  }
`;
export const Span = styled.span`
  color: ${color.liteWhite};
`;
