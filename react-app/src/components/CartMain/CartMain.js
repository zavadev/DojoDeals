import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { getCartThunk, deleteOneEntryThunk, clearCartThunk } from '../../store/cart';
import UpdateCartEntry from './UpdateCartEntry';
import './CartMain.css';

function CartMain() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const userId = user?.id;
  const cart_contents = useSelector(state => Object.values(state.cart_contents));
  const subtotal = cart_contents.reduce((acc, entry) => acc + +(entry?.product_details.price * entry?.quantity), 0)


  useEffect(() => {
    if (user) {
      dispatch(getCartThunk(user.id));
    }
  }, [dispatch, user])

  if (!userId) {
    return <Redirect to="/login" />
  }

  const checkoutHandle = () => {
    dispatch(clearCartThunk(userId))
    history.push('/checkout')
  }

  return (
    <>
      <h1 id="shopping-cart-main-title">Your Shopping Cart</h1>
      {!cart_contents.length &&
        <h2 id="empty-cart-notice">Your Cart is Empty!</h2>
      }
      <div id="main-cart-container">
        <div id="entries-container">
          <dl id="entries-list">
            {cart_contents?.map(entry => (
              <dt key={entry?.id} className="single-list-entry">
                <div className="single-list-image">
                  <img src={entry?.product_details.image} className="cart-list-image" alt={entry?.product_details.title}/>
                </div>
                <div className="single-list-info">
                  <div>
                    {entry?.product_details.title}
                  </div>
                  <div className="entry-price-div">
                    Price: {entry?.product_details.price} ea.
                  </div>
                </div>
                <div className="entry-quantity-div">
                  Quantity:
                  <UpdateCartEntry total={entry?.quantity} user_id={userId} product_id={entry?.product_details.id} />
                </div>
                <div className="delete-btn-div">
                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => dispatch(deleteOneEntryThunk(userId, entry?.product_details.id, entry?.id))}>
                      Remove
                    </button>
                </div>
              </dt>
            ))}
          </dl>
        </div>
        {cart_contents.length &&
          <div id="checkout-div">
              <div id="checkout-inner-div">
              <div className="checkout-title-div">
                  Your Cart Total
              </div>
              <div className="sale-div">
                <div>Subtotal:</div>
                <s>{(subtotal*1.3).toFixed(2)}</s>
                <div id="sale-info-div">30% - Grand Opening Sale!</div>
                <div id="after-sale-price">${(subtotal).toFixed(2)}</div>
              </div>
              <div id="shipping-cost-div">
                Shipping: $5.00
              </div>
              <div className="grand-total-div">
                GRAND TOTAL: ${(subtotal+5).toFixed(2)}
              </div>
              <div className="checkout-button-div">
                <button id="checkout-button" onClick={checkoutHandle} >CHECKOUT</button>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default CartMain;
