import { Field } from 'formik';
import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';

export const FilterTitle = styled.h3`
  font-size: 10px;
  line-height: 1.2;
  font-weight: 500;
  margin-block-end: 8px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.285;
  }
`;

export const LabelWrap = styled.div`
  position: relative;
`;

export const Label = styled.label`
  padding: 14px 10px 14px 14px;

  position: absolute;
  z-index: 1;

  color: ${color.grey};
  font-size: 14px;
  line-height: 1.285;
`;

export const Input = styled(Field)`
  position: relative;
  inline-size: 100%;
  margin-block-end: 8px;
  padding: 14px;
  border-radius: 12px;
  border: none;
  outline: none;
  background-color: ${color.darkGray};

  font-size: 14px;
  line-height: 1.285;
  color: ${color.white};

  &[name='title'] {
    padding-left: 85px;
  }
  &[name='author'] {
    padding-left: 93px;
  }
  &[name='pages'] {
    padding-left: 135px;
  }
  &[name='page'] {
    padding-inline-start: 111px;
  }

  @media screen and (min-width: 768px) {
    margin-block-end: 14px;
    min-inline-size: 295px;
  }

  @media screen and (min-width: 1440px) {
    margin-block-end: 8px;
    min-inline-size: 313px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 8px;
  }
`;

export const BtnFilter = styled.button`
  margin-block-start: 12px;
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
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.125;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 12px 28px;
  }
`;
