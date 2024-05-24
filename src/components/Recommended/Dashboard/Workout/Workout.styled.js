import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';

export const WorkoutWrap = styled.div`
  @media screen and (max-width: 767px) {
    margin-block-start: 20px;
  }
  padding: 20px;
  border-radius: 12px;
  background-color: ${color.darkGray};

  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    margin-block-end: 20px;

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  ul li {
    display: flex;
    gap: 12px;
  }

  ul li:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Number = styled.div`
  padding: 11px 16px;
  inline-size: 40px;
  block-size: 40px;
  border-radius: 50%;
  background: ${color.white};

  @media screen and (min-width: 768px) {
    padding: 13px 18px;
    inline-size: 44px;
    block-size: 44px;
  }

  span {
    color: ${color.lightBlack};
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.285;

  span {
    color: ${color.grey};
  }
`;

export const Link = styled(NavLink)`
  color: ${color.gray};
  font-size: 14px;
  line-height: 1.285;
  text-decoration-line: underline;
  text-underline-offset: 3px;
  transition: color 350ms linear;

  &:is(.active, :hover, :focus) {
    color: ${color.white};
  }
`;
