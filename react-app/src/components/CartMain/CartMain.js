import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartThunk, deleteOneEntryThunk } from '../../store/cart';
import UpdateCartEntry from './UpdateCartEntry';
import './CartMain.css'

function CartMain() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id);
  const cart_contents = useSelector(state => Object.values(state.cart_contents));

  useEffect(() => {
    dispatch(getCartThunk(userId));
  }, [dispatch, userId])

  return (
    <>
      <h1>Everything in the cart:</h1>
      <div id="entries-container">
        <dl id="entries-list">
          {cart_contents?.map(entry => (
            <dt key={entry?.id} className="single-list-entry">
              <div className="single-list-image-title">
                {entry?.product_details.title}
                <img src={entry?.product_details.image} className="cart-list-image" alt={entry?.product_details.title}/>
              </div>
              <div className="single-list-info">
                <div className="entry-price-div">
                  Price: {entry?.product_details.price} ea.
                </div>
                <div className="entry-quantity-div">
                  Quantity:
                  {/* <input type="number" value={entry?.quantity} onChange={(e) => console.log("====>>>>>>>", e.target.value)}/> */}
                  <UpdateCartEntry total={entry?.quantity} user_id={userId} product_id={entry?.product_details.id}/>
                </div>
              </div>
              <div className="delete-btn-div">
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => dispatch(deleteOneEntryThunk(userId, entry?.product_details.id, entry?.id))}>
                    REMOVE
                  </button>
              </div>
            </dt>
          ))}
        </dl>
      </div>
    </>
  )
}

export default CartMain;
