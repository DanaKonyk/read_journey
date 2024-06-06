import { useAuth } from '../../hooks/useAuth.js';
import { Name, NameWrap, UserWrap } from './UserMenu.styled.js';

const UserMenu = () => {
  const { user, isLoggedIn } = useAuth();
  const userName = user && user.name ? user.name.split('') : '';

  return (
    <UserWrap>
      {isLoggedIn && (
        <>
          <NameWrap>{userName[0]}</NameWrap>
          <Name>{user.name}</Name>
        </>
      )}
    </UserWrap>
  );
};

export default UserMenu;
