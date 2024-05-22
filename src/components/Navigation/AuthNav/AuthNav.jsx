import { Link, Nav } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Nav>
      <Link to="register">Registration</Link>
      <Link to="login">Login</Link>
    </Nav>
  );
};

export default AuthNav;
