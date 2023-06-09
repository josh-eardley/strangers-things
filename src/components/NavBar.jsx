import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = ({ setUser, setToken, setIsLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <nav>
      <NavLink to='/'>Home</NavLink> |
      <NavLink to='/auth/register'>SignUP</NavLink> |
      <NavLink to='/auth/login'>Login</NavLink> |
      <NavLink to='/posts'>Posts</NavLink>
      <button
        onClick={() => {
          setIsLoggedIn(false);
          setUser({});
          setToken('');
          localStorage.removeItem('token');
          navigate('/');
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default NavBar;