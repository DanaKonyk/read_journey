import {
  FormWrap,
  Logo,
  LogoWrap,
  Span,
  Text,
  TextLogo,
  Wrapper,
} from './RegistrationPage.styled';
import icon from '../../images/sprite.svg';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const RegistrationPage = () => {
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
        <RegisterForm />
      </FormWrap>
    </Wrapper>
  );
};

export default RegistrationPage;
