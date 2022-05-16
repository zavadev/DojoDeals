import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
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
  const reviewSubmitted = reviews?.some(review => review.user_id === sessionUser.id)
  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(getOneProductThunk(productId))
    dispatch(getReviewsThunk(productId))
  }, [dispatch, productId])

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
      <h1>PRODUCT DETAILS PAGE</h1>
      <div id="product-main-info">
        <div id="product-main-title">{product?.title} - ${product?.price}</div>
        <div id="add-cart-div">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart(sessionUser?.id, productId)}>
            ADD TO CART
          </button>
          <div id="error-div">
            {error}
          </div>
        </div>
        <img src={product?.image} alt={product?.title} className="details-main-photo"/>
        <p>{product?.description}</p>
      </div>
      <div className="details-reviews-container">
        <div className="reviews-header">
          REVIEWS FOR THIS PRODUCT:
        </div>
        { reviewSubmitted ? null : (
          <div>
            <AddReviewModal productId={productId}/>
          </div>
        )
        }
        <div>
          <dl>
            {reviews?.map(review => (
              <dt key={review?.id} className="review-list-item-container">
                <div>{review?.title}</div>
                <div>{review?.content}</div>
                <div>{review?.rating}/5 Stars</div>
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
    </>
  )
}

export default ProductDetails;
