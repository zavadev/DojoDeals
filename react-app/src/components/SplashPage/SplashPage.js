import React from "react";
import { NavLink } from 'react-router-dom';
import './SplashPage.css';

function SplashPage(){

  return (
    <>
      <div id="splash-page-container">
        <img src='https://res.cloudinary.com/doulyb7dt/image/upload/v1652983342/DojoDeals/logo1_h16vkt.png' alt="enso-logo" id="splash-image-enso"/>
        <div>Please <NavLink to='/login'>Log In</NavLink> or <NavLink to='/sign-up'>Sign Up</NavLink> to continue...</div>
      </div>
    </>
  )
}

export default SplashPage;
