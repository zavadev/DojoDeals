import React from "react";
import { useDispatch } from "react-redux";
import { deleteReviewThunk } from "../../store/reviews.js";
import './DeleteReviewForm.css';

function DeleteReviewForm({ setShowModal, user_id, product_id }) {
  const dispatch = useDispatch();
  // const user_id = useSelector(state => state.session.user.id);

  return (
    <>
      <form id="delete-review-form">
        <p id="delete-title">Are you sure you want to delete?</p>
        <div id="delete-review-btn-div">
          <div id="submit-btn-div">
            <button type="button" id="review-delete-confirm-button" onClick={() => {
              dispatch(deleteReviewThunk(user_id, product_id));
              setShowModal(false)
            }
            }>Yes</button>
          </div>
          <div id="no-review-btn">
            <button type="button" id="review-delete-cancel-button" onClick={() => setShowModal(false)}>No</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default DeleteReviewForm;
