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
} from './LoginForm.styled';
import icon from '../../images/sprite.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';
import { Notify } from 'notiflix';

const emailRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const schema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegExp, 'Enter a valid Email')
    .email('Enter a valid Email')
    .required('Email is required'),
  password: Yup.string()
    .matches(/^(?=.*[a-z])/, 'Password must meet the requirements')
    .min(8, 'Password must be at least 7 characters')
    .max(64, 'Password must be no more than 16 characters')
    .required('Password is required'),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(logIn(values));
      resetForm();
      navigate('/recommended');
    } catch (error) {
      Notify.failure('Wrong email or password. Please try again');
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <StyledForm>
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
              <span>Log in</span>
            </BtnSubmit>
            <AuthLink to="/register">Don’t have an account?</AuthLink>
          </BtnLinkWrap>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;
