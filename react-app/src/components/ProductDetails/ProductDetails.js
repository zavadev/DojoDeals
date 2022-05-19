import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getOneProductThunk } from '../../store/products';
import { getReviewsThunk } from '../../store/reviews';
import { addEntryToCartThunk } from '../../store/cart';
import AddReviewModal from '../AddReviewModal';
import DeleteReviewModal from '../DeleteReviewModal';
import EditReviewModal from '../EditReviewModal';
import './ProductDetails.css';

function ProductDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const fetchedProd = useSelector(state => Object.values(state.products)[0]);
  const sessionUser = useSelector(state => state.session.user);
  const product = fetchedProd?.product
  const reviews = useSelector(state => Object.values(state.reviews));
  const reviewSubmitted = reviews?.some(review => review.user_id === sessionUser?.id)
  const [error, setError] = useState("");
  const [showButton, setShowButton] = useState(reviewSubmitted)


  useEffect(() => {
    dispatch(getOneProductThunk(productId))
    dispatch(getReviewsThunk(productId))
  }, [dispatch, productId])

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setShowButton(reviewSubmitted)
    }
    return () => isMounted = false;
  }, [reviewSubmitted])

  if (!sessionUser) {
    return <Redirect to="/login" />
  }

  const handleAddToCart = (userId, productId) => {
    dispatch(addEntryToCartThunk(userId, productId))
      .then((res) => {
        if (res.Error) {
          setError(res.Error)
        } else {
          setError("")
        }
      })
  }

  return (
    <>
      <h1 id="product-details-main-title">PRODUCT DETAILS</h1>
      <div id="product-details-container">
        <div id="product-main-info">
          <img src={product?.image} alt={product?.title} className="details-main-photo"/>
        </div>
        <div className="details-reviews-container">
          <div id="product-main-title">{product?.title} - ${product?.price}</div>
          <p>{product?.description}</p>
          <div id="add-cart-div">
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(sessionUser?.id, productId)}>
              ADD TO CART
            </button>
            <div id="addcart-error-div">
              {error}
            </div>
          </div>
            <div id="reviews-primary-div">
              <div className="reviews-header">
                REVIEWS FOR THIS PRODUCT:
              </div>
              { !showButton &&
                <div>
                  <AddReviewModal />
                </div>
              }
              <div>
            </div>
            <dl id="review-list-dl">
              {reviews?.map(review => (
                <dt key={review?.id} className="review-list-item-container">
                  <div className="individual-review-title">{review?.title}</div>
                  <div id='review-content-div'>{review?.content}</div>
                  <div>Rating: {review?.rating}/5</div>
                  {sessionUser && sessionUser.id === review?.user_id &&
                    <>
                      <EditReviewModal review={review} />
                      <DeleteReviewModal user_id={review?.user_id} product_id={review?.product_id}/>
                    </>
                  }
                </dt>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails;
