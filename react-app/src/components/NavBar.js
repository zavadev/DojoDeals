import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css';


const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <nav>
      <ul className="navbar">
        <li className="nav-list-item">
          <div className="nav-dojo-logo">DojoDeals (Logo)</div>
        </li>
        <li className="nav-list-item">
          <NavLink to='/main' exact={true} activeClassName='active' id="nav-home-link" className="nav-links">
            Home
          </NavLink>
        </li>
        {!sessionUser &&
          <div className="login-signup-div">
            <li className="nav-list-item">
              <NavLink to='/login' exact={true} activeClassName='active' className="nav-links">
                Login
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink to='/sign-up' exact={true} activeClassName='active' className="nav-links">
                Sign Up
              </NavLink>
            </li>
            {/* <li>
              <NavLink to='/users' exact={true} activeClassName='active'>
                Users
              </NavLink>
            </li> */}
          </div>
        }
        {sessionUser &&
          <li className="nav-list-item">
            <LogoutButton />
          </li>
        }
      </ul>
    </nav>
  );
}

export default NavBar;
