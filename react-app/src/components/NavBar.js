import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { getCartThunk } from '../store/cart';
import './NavBar.css';


const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const location = useLocation();
  const dispatch = useDispatch();
  const userId = sessionUser?.id;
  const cart_contents = useSelector(state => Object.values(state.cart_contents));
  const cartTotal = cart_contents?.reduce((sum, entry) => sum += entry?.quantity, 0)

  useEffect(() => {
    dispatch(getCartThunk(userId));
  }, [dispatch, userId])

  return (
    <nav>
      <ul className="navbar">
        <li className="nav-list-item">
          <div className="nav-dojo-logo">DojoDeals (Logo)</div>
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
            <li className="nav-list-item">
              <LogoutButton />
            </li>
            {location?.pathname !== '/cart' ?
            (  <li className="nav-list-item">
                <NavLink to='/cart' exact={true} className="nav-links">
                  Cart ({cartTotal})
                </NavLink>
              </li>) : null
            }
          </>
        }
      </ul>
    </nav>
  );
}

export default NavBar;
