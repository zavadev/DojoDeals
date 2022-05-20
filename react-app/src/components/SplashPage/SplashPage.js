import React from "react";
import { NavLink } from 'react-router-dom';
import './SplashPage.css';

function SplashPage(){

  return (
    <>
      <div id="splash-page-container">
        <img src='https://res.cloudinary.com/doulyb7dt/image/upload/v1652983342/DojoDeals/logo1_h16vkt.png' alt="enso-logo" id="splash-image-enso"/>
        <img src='https://res.cloudinary.com/doulyb7dt/image/upload/v1653028512/DojoDeals/dojodealsgray_hmuzgg.png' alt='dojo-deals' id="splash-page-dojo" />
        <div id="splash-page-slogan-one">MARTIAL ARTS SUPPLY</div>
        <div id="splash-page-slogan-two">Don't Fight A Good Deal</div>
        <div id="continue-path">Please <NavLink to='/login'>Log In</NavLink> or <NavLink to='/sign-up'>Sign Up</NavLink> to continue...</div>
      </div>
    </>
  )
}

export default SplashPage;
