import { Link, Nav } from './UserNav.styled';

const UserNav = ({ onClose }) => {
  return (
    <Nav onClick={onClose}>
      <Link to="recommended">Home</Link>
      <Link to="library">My library</Link>
    </Nav>
  );
};

export default UserNav;
