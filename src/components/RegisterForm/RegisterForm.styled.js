import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import color from '../../stylesheet/GlobalColors';
import { NavLink } from 'react-router-dom';

export const StyledForm = styled(Form)`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 40px 4px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`;

export const LabelBox = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    max-inline-size: 472px;
  }
`;

export const Label = styled.label`
  padding: 14px 10px 14px 14px;

  position: absolute;
  z-index: 1;

  color: ${color.grey};
  font-size: 14px;
  line-height: 1.285;
`;

export const StyledInput = styled(Field)`
  margin-block-end: 8px;
  padding: 14px;

  position: relative;
  inline-size: 100%;
  border-radius: 12px;
  border: none;
  outline: none;
  background-color: ${color.darkGray};
  font-size: 14px;
  line-height: 1.285;
  color: ${color.white};

  &[name='name'] {
    padding-inline-start: 62px;
  }
  &[name='email'] {
    padding-inline-start: 49px;
  }
  &[name='password'] {
    padding-inline-start: 83px;
  }
  &[name='page'] {
    padding-inline-start: 111px;
  }
  &[name='pages'] {
    padding-inline-start: 135px};
  }

  &.success {
    border: 1px solid ${color.lightGreen};
  }

  &.error {
    border: 1px solid ${color.red};
  }

  @media screen and (min-width: 768px) {
    margin-block-end: 14px;
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  margin-block-end: 18px;

  font-size: 12px;
  color: ${color.red};
`;

export const EyeBtn = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 14px;
  right: 16px;
`;

export const BtnSubmit = styled.button`
  //   margin-block-start: 12px;
  margin-inline-end: 12px;
  padding: 12px 25px;

  border: 1px solid transparent;
  border-radius: 30px;
  background-color: ${color.white};
  transition: background-color 350ms linear, border 350ms linear;

  &:is(:hover, :focus) {
    background-color: transparent;
    border: 1px solid ${color.liteWhite};
  }

  @media screen and (min-width: 768px) {
    max-width: 225px;
    // margin-block-start: 68px;
    margin-inline-end: 20px;
    padding: 16px 54px span {
      font-size: 20px;
      line-height: 1;
    }
  }

  span {
    color: ${color.lightBlack};
    font-size: 14px;
    font-weight: 700;
    line-height: 1.333;
    transition: color 350ms linear;
  }
  &:is(:hover, :focus) span {
    color: ${color.white};
  }
`;

export const AuthLink = styled(NavLink)`
  color: ${color.gray};
  font-size: 12px;
  line-height: 1.17;
  text-decoration-line: underline;
  text-underline-offset: 2px;
  white-space: nowrap;
  transition: color 350ms linear;

  &:is(:hover, :focus) {
    color: ${color.white};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.285;
  }
`;

export const BtnLinkWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 82px;
  }
`;
