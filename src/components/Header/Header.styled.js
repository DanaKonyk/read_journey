import { Link } from 'react-router-dom';
import styled from 'styled-components';
import color from '../../stylesheet/GlobalColors';

export const HeaderWrap = styled.header`
  background: ${color.lightBlack};
  border-radius: 15px;
  margin: 20px 20px 10px 20px;
  padding: 11px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 20px 16px;
    height: 74px;
    margin: 32px 32px 16px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 16px;
    height: 74px;
    margin: 32px 83px 16px 83px;
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

export const BtnMenu = styled.button`
  inline-size: 40px;
  block-size: 40px;
  background: transparent;
  border: none;
  z-index: 2;

  &:is(:hover, :focus) {
    scale: 1.1;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  @media screen and (max-width: 767px) {
    position: fixed;
    top: 0;
    right: -200px;
    z-index: 1;

    inline-size: 200px;
    block-size: 100%;

    background-color: ${color.darkGray};
    animation: fade-in 0.5s forwards;

    @keyframes fade-in {
      0% {
        width: 100px;
      }
      100% {
        width: 200px;
      }
    }

    nav {
      block-size: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }

    &.active {
      transform: translateX(-100%);
    }
  }
`;

export const MobileBtnLogout = styled.button`
  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 40px;
    left: 30%;
  }
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid ${color.white};
  border-radius: 30px;
  transition: background-color 350ms linear, border 350ms linear;

  &:is(:hover, :focus) {
    background-color: ${color.hoverWhite};
    border: 1px solid transparent;
    span {
      color: ${color.lightBlack};
    }
  }

  span {
    color: ${color.white};
    font-size: 14px;
    font-weight: 700;
    line-height: 1.285;
    transition: color 350ms linear;
  }
`;
