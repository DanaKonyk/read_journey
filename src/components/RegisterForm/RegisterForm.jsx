import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  AuthLink,
  BtnLinkWrap,
  BtnSubmit,
  ErrMsg,
  EyeBtn,
  Label,
  LabelBox,
  StyledForm,
  StyledInput,
} from './RegisterForm.styled';
import icon from '../../images/sprite.svg';
import { useState } from 'react';

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 4 characters')
    .max(32, 'Name must be no more than 16 characters')
    .required('Name is required'),
  email: Yup.string()
    .matches(emailRegExp, 'Enter a valid Email')
    .email('Enter a valid Email')
    .required('Email is required'),
  password: Yup.string()
    .matches(/^(?=.*[a-z])/, 'Password must meet the requirements*')
    .min(8, 'Password must be at least 6 characters')
    .max(64, 'Password must be no more than 16 characters')
    .required('Password is required'),
});

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prevState => !prevState);
  };
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={schema}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <LabelBox>
            <Label htmlFor="name">Name:</Label>
            <StyledInput
              type="text"
              name="name"
              id="name"
              className={`special ${
                errors.name && touched.name ? 'error' : ''
              } ${touched.name && !errors.name ? 'success' : ''}`}
            />
            <ErrMsg name="name" component="div" />
          </LabelBox>

          <LabelBox>
            <Label htmlFor="email">Mail:</Label>
            <StyledInput
              type="email"
              name="email"
              id="email"
              className={`special ${
                errors.email && touched.email ? 'error' : ''
              } ${touched.email && !errors.email ? 'success' : ''}`}
            />
            <ErrMsg name="email" component="div" />
          </LabelBox>
          <LabelBox>
            <Label htmlFor="password">Password:</Label>
            <StyledInput
              autoComplete="off"
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              className={`special ${
                touched.password && errors.password ? 'error' : ''
              } ${touched.password && !errors.password ? 'success' : ''}`}
            />
            <EyeBtn onClick={() => togglePassword()} type="button">
              {touched.password && errors.password ? (
                <svg width="20" height="20">
                  <use xlinkHref={`${icon}#error`} />
                </svg>
              ) : touched.password && !errors.password ? (
                <svg width="20" height="20">
                  <use xlinkHref={`${icon}#icon-check-psw`} />
                </svg>
              ) : (
                <svg width="18" height="18">
                  <use
                    xlinkHref={showPassword ? `${icon}#eye` : `${icon}#eye-off`}
                  />
                </svg>
              )}
            </EyeBtn>
            <ErrMsg name="password" component="p" />
          </LabelBox>
          <BtnLinkWrap>
            <BtnSubmit type="submit">
              <span>Registration</span>
            </BtnSubmit>
            <AuthLink to="/login">Already have an account?</AuthLink>
          </BtnLinkWrap>
        </StyledForm>
      )}
    </Formik>
  );
};

export default RegisterForm;
