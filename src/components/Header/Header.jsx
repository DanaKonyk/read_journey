import { HeaderWrap, Logo, LogoWrap, Nav, TextLogo } from './Header.styled.js';
import icon from '../../images/sprite.svg';
import AuthNav from '../../components/Navigation/AuthNav/AuthNav.jsx';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const userLocation =
    location.pathname === '/login' || location.pathname === '/register';
  return (
    <>
      {!userLocation && (
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
      )}
    </>
  );
};

export default Header;
