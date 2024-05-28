import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';
import { NavLink } from 'react-router-dom';

export const RecommendedWrap = styled.div`
  @media screen and (max-width: 767px) {
    margin-block-start: 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-block-start: 78px;
  }
  padding: 20px;
  border-radius: 12px;
  background: ${color.darkGray};

  h3 {
    margin-block-end: 14px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
  }
`;

export const BooksList = styled.ul`
  margin-block-end: 17px;
  display: flex;
  gap: 20px;

  li img {
    margin-block-end: 8px;
    inline-size: 71px;
    block-size: 107px;
    border-radius: 8px;
  }

  li h4 {
    margin-block-end: 2px;
    font-size: 10px;
    font-weight: 700;
    line-height: 1.2;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-inline-size: 71px;
  }

  li h5 {
    color: ${color.grey};
    font-size: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-inline-size: 71px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  color: ${color.grey};
  font-size: 14px;
  line-height: 1.285;
  text-decoration-line: underline;
  text-underline-offset: 3px;
  transition: color 350ms linear;

  &:is(.active, :hover, :focus) {
    color: ${color.white};
  }
`;
