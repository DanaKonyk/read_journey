import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
