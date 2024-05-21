import {
  FormWrap,
  Logo,
  LogoWrap,
  Span,
  Text,
  TextLogo,
  Wrapper,
} from './LoginPage.styled';
import icon from '../../images/sprite.svg';
import HeroImage from 'components/HeroImage/HeroImage';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <Wrapper>
      <FormWrap>
        <LogoWrap>
          <Logo>
            <use xlinkHref={icon + '#logo'}></use>
          </Logo>
          <TextLogo to="/recommended">READ JOURNEY</TextLogo>
        </LogoWrap>
        <Text>
          Expand your mind, reading <Span>a book</Span>
        </Text>
        <LoginForm />
      </FormWrap>
      <HeroImage />
    </Wrapper>
  );
};

export default LoginPage;
