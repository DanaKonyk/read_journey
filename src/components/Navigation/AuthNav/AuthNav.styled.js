import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import color from 'stylesheet/GlobalColors';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: ${color.white};
  }
  @media screen and (min-width: 1440px) {
    margin-right: 190px;
  }
`;

export const Link = styled(NavLink)`
  margin-right: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.125;
  letter-spacing: -0.02em;
  &:last-child {
    margin-right: 0;
  }
`;
