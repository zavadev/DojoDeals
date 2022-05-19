import React from 'react';
import { NavLink } from 'react-router-dom';
import './CartMain.css';

function Checkout() {
  return (
    <>
      <div id="checked-out-div">
        <h1>Your order is on its way!</h1>
        <NavLink to='/main'>Back to Products</NavLink>
      </div>
    </>
  )
}

export default Checkout;
