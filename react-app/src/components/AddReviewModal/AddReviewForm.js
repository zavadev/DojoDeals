import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { postReviewThunk } from "../../store/reviews.js"

function AddReviewForm({ setShowModal }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState([]);
  const { productId } = useParams();
  const user_id = useSelector(state => state.session.user.id);

  const reviewSubmit = (e) => {
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
      "product_id": +productId,
      title,
      content,
      rating
    }

    dispatch(postReviewThunk(productId, newReview))
    .then((res)=>{
      if(res.errors){
        setErrors(res?.errors)
      } else {
        setErrors([])
      }
    })
  }

  return (
    <>
      <form id="add-review-form" onSubmit={reviewSubmit}>
        <div>
          {errors?.length > 0 && errors?.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div id="add-review-title">Add Review</div>
        <div>Rating:</div>
        <select className="add-review-form-inputs" onChange={(e) => setRating(+e.target.value)}>
          <option value="none">Rating (1-5)</option>
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
          id="title-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="add-review-form-inputs"
        />
        <label id="content-label">
          Content:
        </label>
        <textarea
          id="content-input"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="add-review-form-inputs"
        />
        <div id="add-review-submit-btn-div">
          <button id="add-review-submit-button" type="submit">Submit Review</button>
        </div>
      </form>
    </>
  )
}

export default AddReviewForm;
