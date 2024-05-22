import { useAuth } from '../../hooks/useAuth.js';
import { NameWrap, UserWrap } from './UserMenu.styled.js';

const UserMenu = () => {
  const { user, isLoggedIn } = useAuth();
  const userName = user && user.name ? user.name.split('') : '';

  console.log(user);

  return (
    <UserWrap>{isLoggedIn && <NameWrap>{userName[0]}</NameWrap>}</UserWrap>
  );
};

export default UserMenu;