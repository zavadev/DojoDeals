import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postReviewThunk } from "../../store/reviews.js"

function AddReviewForm({ setShowModal, productId }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState([]);
  const user_id = useSelector(state => state.session.user.id);

  const reviewSubmit = async (e) => {
    e.preventDefault();

    let newReview = {
      user_id,
      "product_id": productId,
      title,
      content,
      rating
    }
    dispatch(postReviewThunk(productId, newReview))
    setShowModal(false)
    //TRYING TO DO ERROR HANDLING:
    // await dispatch(postReviewThunk(productId, newReview))
    // .then((res)=>{
    //   if(!res?.ok){
    //     setErrors(res?.errors)
    //   }else{
    //     setErrors([])
    //     setShowModal(false)
    //   }
    // })
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
        <select onChange={(e) => setRating(+e.target.value)}>
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
        />
        <label id="content-label">
          Content:
        </label>
        <textarea
          id="content-input"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div id="submit-btn-div">
          <button id="submit-button" type="submit">Submit Review</button>
        </div>
      </form>
    </>
  )
}

export default AddReviewForm;
