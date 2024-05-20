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
  justify-content: center;
  gap: 30px;
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

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: ${color.white};
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
