import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import '../NavBar.css';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const onLogout = async (e) => {
    await dispatch(logout())
    history.push('/')
  };

  // return <button onClick={onLogout}>Logout</button>;
  return <img src="https://res.cloudinary.com/doulyb7dt/image/upload/v1652843239/DojoDeals/account-logout-24_hifl9d.png" alt="Log out" onClick={onLogout} id="logout-link"></img>
};

export default LogoutButton;
