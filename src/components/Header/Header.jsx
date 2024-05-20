import { HeaderWrap, Logo, LogoWrap, Nav, TextLogo } from './Header.styled.js';
import icon from '../../images/sprite.svg';
import AuthNav from '../../components/Navigation/AuthNav/AuthNav.jsx';

const Header = () => {
  return (
    <HeaderWrap>
      <LogoWrap>
        <Logo>
          <use xlinkHref={icon + '#logo'}></use>
        </Logo>
        <TextLogo to="/recommended">READ JOURNEY</TextLogo>
      </LogoWrap>
      <Nav>
        <AuthNav />
      </Nav>
    </HeaderWrap>
  );
};

export default Header;
