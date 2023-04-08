import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationUser } from 'redux/auth/operations';
import { FormLoginAndRegisterContact } from './LoginAndRegister.styled';

export const Register = () => {
    const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    console.log(name);
    console.log(value);
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registrationUser({name, email, password}));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <FormLoginAndRegisterContact onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>

      <label>
        Mail
        <input type="email" name="email" value={email} onChange={handleChange} />
      </label>

      <label>
        Password
        <input type="password" name="password" value={password} onChange={handleChange} />
      </label>
      <button type="submit">Registration</button>
    </FormLoginAndRegisterContact>
  );
};
