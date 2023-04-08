import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from './Header/AppBar';
import Home from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
// import { Contacts } from './pages/Contacts';
import { fetchCurrentUser } from 'redux/auth/operations';
import { PrivateRoute } from './Header/PrivateRoute';
import { Contacts } from './pages/Contacts';
import { PublicRoute } from './Header/PublicRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
}
