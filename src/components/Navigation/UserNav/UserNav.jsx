import { Link } from 'react-router-dom';
import { Nav } from './UserNav.styled';

const UserNav = () => {
  return (
    <Nav>
      <Link to="recommended">Home</Link>
      <Link to="library">My library</Link>
    </Nav>
  );
};

export default UserNav;
