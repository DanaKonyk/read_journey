import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import color from 'stylesheet/GlobalColors';

export const Nav = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 32px;
    justify-content: start;
    a {
      text-decoration: none;
      color: ${color.white};
    }
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;

export const Link = styled(NavLink)`
  @media screen and (max-width: 768px) {
    color: ${color.grey};
    margin-right: 0;
  }
  position: relative;
  margin-right: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.125;
  letter-spacing: -0.02em;
  &:last-child {
    margin-right: 0;
  }

  transition: color 350ms linear;

  &:is(.active, :hover, :focus) {
    color: ${color.white};
  }

  &.active::after,
  &:hover::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${color.blue};
    border-radius: 12px;
`;
