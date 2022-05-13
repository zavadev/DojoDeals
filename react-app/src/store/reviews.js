const GET_REVIEWS = 'reviews/GET_REVIEWS';
const POST_REVIEW = 'reviews/POST_REVIEW';
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  reviews
})

const postReview = (review) => ({
  type: POST_REVIEW,
  review
})

const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  review
})

const deleteReview = (review) => ({
  type: DELETE_REVIEW,
  review
})

export const getReviewsThunk = (productId) => async (dispatch) => {
  const response = await fetch(`/api/products/${productId}`);
  if (response.ok){
    const reviews = await response.json();
    dispatch(getReviews(reviews.reviews));
    return response;
  }
}

export const postReviewThunk = (productId, review) => async (dispatch) => {
  const response = await fetch(`/api/products/${productId}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(review)
  });
  if (response.ok) {
    const newReview = await response.json();
    dispatch(postReview(newReview))
    return newReview;
  }
  return response;
}

export const updateReviewThunk = (productId, userId, review) => async (dispatch) => {
  const response = await fetch(`/api/products/${productId}/reviews/${userId}/edit`, {
    method: "PUT",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(review)
  })
  if (response.ok) {
    const updatedReview = await response.json();
    dispatch(updateReview(updatedReview));
    return updatedReview;
  }
  return response;
}

export const deleteReviewThunk = (userId, productId) => async (dispatch) => {
  const response = await fetch(`/api/products/${productId}/reviews/${userId}`, {
      method: "DELETE"
  });
  if (response.ok) {
    const deletedReview = await response.json();
    dispatch(deleteReview(deletedReview));
    return deletedReview;
  }
  return response;
};


const initialState = {};

const reviewsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_REVIEWS:
      newState = {}
      action.reviews.forEach(ele => newState[ele.id] = ele);
      return newState;
    case POST_REVIEW:
      newState = {};
      newState = { ...state, [action.review.id]: action.review };
      return newState;
    case UPDATE_REVIEW:
      newState = {};
      newState = { ...state, [action.review.id]: action.review };
      return newState;
    case DELETE_REVIEW:
      newState = { ...state };
      delete newState[action.review.id];
      return newState;
    default:
      return state;
  }
}

export default reviewsReducer;
