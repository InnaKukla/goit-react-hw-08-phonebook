import { useSelector } from 'react-redux';
import { userNameSelector } from 'redux/auth/selectors';
import { HomePageGreeting } from './Home.styled';

export default function Home() {
  const name = useSelector(userNameSelector);
  return (
    <div>
      {!name ? (
        <HomePageGreeting>Welcome to phonebook</HomePageGreeting>
      ) : (
        <HomePageGreeting>{name}, welcome to your phonebook</HomePageGreeting>
      )}
    </div>
  );
}
