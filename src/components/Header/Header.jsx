import {
  BtnLogOut,
  BtnMenu,
  HeaderWrap,
  Logo,
  LogoWrap,
  MobileBtnLogout,
  MobileMenu,
  TextLogo,
} from './Header.styled.js';
import icon from '../../images/sprite.svg';
import AuthNav from '../../components/Navigation/AuthNav/AuthNav.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';
import UserNav from 'components/Navigation/UserNav/UserNav.jsx';
import UserMenu from 'components/UserMenu/UserMenu.jsx';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations.js';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLocation =
    location.pathname === '/login' || location.pathname === '/register';

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
    isMenuOpen
      ? (document.body.style.overflowY = 'auto')
      : (document.body.style.overflowY = 'hidden');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflowY = 'auto';
  };
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
          {isLoggedIn ? <UserNav /> : <AuthNav />}
          <UserMenu />
          {isLoggedIn && (
            <BtnLogOut type="button" onClick={handleLogOut}>
              Log out
            </BtnLogOut>
          )}
          {isLoggedIn &&
            (isMenuOpen ? (
              <>
                <BtnMenu type="button" onClick={toggleMenu}>
                  <svg width="28" height="28">
                    <use xlinkHref={`${icon}#close`} />
                  </svg>
                </BtnMenu>
                <MobileMenu className={`${isMenuOpen ? 'active' : ''}`}>
                  <UserNav onClose={closeMenu} />
                  {isLoggedIn && (
                    <MobileBtnLogout type="button" onClick={handleLogOut}>
                      <span>Log out</span>
                    </MobileBtnLogout>
                  )}
                </MobileMenu>
              </>
            ) : (
              <BtnMenu type="button" onClick={toggleMenu}>
                <svg width="28" height="28">
                  <use xlinkHref={`${icon}#icon-menu`} />
                </svg>
              </BtnMenu>
            ))}
        </HeaderWrap>
      )}
    </>
  );
};

export default Header;
