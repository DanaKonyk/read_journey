import {
  BtnLogOut,
  HeaderWrap,
  Logo,
  LogoWrap,
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

const Header = () => {
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
        </HeaderWrap>
      )}
    </>
  );
};

export default Header;
