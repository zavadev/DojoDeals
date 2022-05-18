import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { getCartThunk } from '../store/cart';
import './NavBar.css';


const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  // const location = useLocation();
  const dispatch = useDispatch();
  const userId = sessionUser?.id;
  const cart_contents = useSelector(state => Object.values(state.cart_contents));
  const cartTotal = cart_contents?.reduce((sum, entry) => sum += entry?.quantity, 0)

  useEffect(() => {
    if (sessionUser){
      dispatch(getCartThunk(userId));
    }
    // return () => console.log("Hi")
  }, [dispatch, userId, sessionUser])

  return (
    <nav>
      <ul className="navbar">
        <li className="nav-list-item">
          <img src='https://res.cloudinary.com/doulyb7dt/image/upload/v1652840507/DojoDeals/output-onlinepngtools_yng09l.png' alt='logo' width="50" height="50"/>
          <img id="logo-writing" src='https://res.cloudinary.com/doulyb7dt/image/upload/v1652841150/DojoDeals/text-1652840976101_vi7x4u.png' alt='logo' width="150" height="30"/>
        </li>
        {/* <li className="nav-list-item">
          <NavLink to='/main' exact={true} activeClassName='active' id="nav-home-link" className="nav-links">
            Home
          </NavLink>
        </li> */}
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
          <>
            <li className="nav-list-item">
            <NavLink to='/main' exact={true} activeClassName='active' id="nav-home-link" className="nav-links">
              Home
            </NavLink>
            </li>
            <li className="nav-list-item" id="logout-nav">
              <LogoutButton />
            </li>
            <li className="nav-list-item" id="cart-nav-link">
              <NavLink to='/cart' exact={true} className="nav-links">
                <img src='https://res.cloudinary.com/doulyb7dt/image/upload/v1652843049/DojoDeals/cart-16-32_iemyhz.png' alt="Cart Logo" />
              </NavLink>
              <div id="cart-total-div">({cartTotal})</div>
            </li>
          </>
        }
      </ul>
    </nav>
  );
}

export default NavBar;
