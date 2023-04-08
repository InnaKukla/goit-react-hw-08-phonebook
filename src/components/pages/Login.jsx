import { useState } from "react";
import { useDispatch } from "react-redux";
import { logInUser } from "redux/auth/operations";
import { FormLoginAndRegisterContact } from "./LoginAndRegister.styled";

export const Login = () => {
    const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
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
    console.log(email);
    if (email === '' || password === '') {
      alert(`Please, enter your login`);
    }
    dispatch(logInUser({ email, password}));
    setEmail('');
    setPassword('');
  }
  return (
    <FormLoginAndRegisterContact onSubmit={handleSubmit}>
      <label>
        Mail
        <input type="email" name="email" value={email} onChange={handleChange} />
      </label>

      <label>
        Password
        <input type="password" name="password" value={password} onChange={handleChange} />
      </label>

      <button type="submit">Log In</button>
    </FormLoginAndRegisterContact>
  );
};

