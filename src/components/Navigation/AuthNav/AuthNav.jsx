import { Link } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <Link to="register">Registration</Link>
      <Link to="login">Login</Link>
    </>
  );
};

export default AuthNav;
