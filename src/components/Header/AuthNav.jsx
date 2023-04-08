import { StyledAuthLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <StyledAuthLink to="/register">Register</StyledAuthLink>
      <StyledAuthLink to="/login">Log In</StyledAuthLink>
    </div>
  );
};
