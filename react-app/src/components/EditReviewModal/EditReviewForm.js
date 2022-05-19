import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReviewThunk } from "../../store/reviews.js";
import './EditReviewForm.css';

function EditReviewForm({ setShowModal, review }) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(review.rating);
  const [title, setTitle] = useState(review.title);
  const [content, setContent] = useState(review.content);
  const [errors, setErrors] = useState([]);
  const user_id = useSelector(state => state.session.user.id);


  const editSubmit = async (e) => {
    e.preventDefault();

    if (content.length > 250) {
      setErrors(["Content must be fewer than 250 characters."])
      return;
    }
    if (title.length > 20) {
      setErrors(["Title must be fewer than 20 characters."])
      return;
    }

    let newReview = {
      user_id,
      "product_id": review.product_id,
      title,
      content,
      rating
    }

    await dispatch(updateReviewThunk(review.product_id, user_id, newReview))
    .then((res)=>{
      if (res.errors) {
        setErrors(res?.errors)
      } else {
        setErrors([])
        setShowModal(false)
      }
    })
  }

  return (
    <>
      <form id="edit-review-form" onSubmit={editSubmit}>
        {errors?.length > 0 && errors?.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
        <div id="edit-review-title">Edit Review</div>
        <div>Rating:</div>
        <select className="edit-review-form-inputs" onChange={(e) => setRating(+e.target.value)}>
          <option value={rating}>{rating}</option>
          <option value="1">
              1
          </option>
          <option value="2">
              2
          </option>
          <option value="3">
              3
          </option>
          <option value="4">
              4
          </option>
          <option value="5">
              5
          </option>
        </select>
        <label id="title-input-label">
          Title:
        </label>
        <input
          className="edit-review-form-inputs"
          id="title-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label id="content-label">
          Content:
        </label>
        <textarea
          className="edit-review-form-inputs"
          id="content-input"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div id='edit-review-btn-sub-div'>
          <button id="edit-review-submit-button" type="submit">Submit Edit</button>
        </div>
      </form>
    </>
  )
}

export default EditReviewForm;
