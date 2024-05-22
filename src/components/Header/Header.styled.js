import { Link } from 'react-router-dom';
import styled from 'styled-components';
import color from '../../stylesheet/GlobalColors';

export const HeaderWrap = styled.header`
  background: ${color.lightBlack};
  border-radius: 15px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 11px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    padding: 20px 16px;
    height: 74px;
    margin-bottom: 16px;
    margin-top: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1216px;
    margin-left: 100px;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  
    @media screen and (min-width: 320px) {
      margin-bottom: 0;
    }
    margin-right: auto;
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

export const BtnLogOut = styled.button`
  @media screen and (max-width: 767px) {
    padding: 10px 20px;
    display: none;
  }
  margin-right: 0px;
  padding: 12px 28px;
  border-radius: 30px;
  border: 1px solid;
  border-color: ${color.liteWhite};
  color: ${color.white};
  background-color: ${color.lightBlack};
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
  }
`;
