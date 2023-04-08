import { loggedInSelector } from 'redux/auth/selectors';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { useSelector } from 'react-redux';
import { Container, Header } from './Header.styles';

export const AppBar = () => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = useSelector(loggedInSelector);

  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </Container>
  );
};

//   email
// :
// "1234567df@mail.com"
// password
// :
// "zxcvb1234"
