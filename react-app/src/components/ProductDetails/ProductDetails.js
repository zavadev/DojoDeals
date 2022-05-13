import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProductThunk } from '../../store/products';
import { getReviewsThunk } from '../../store/reviews';
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

  useEffect(() => {
    dispatch(getOneProductThunk(productId))
    dispatch(getReviewsThunk(productId))
  }, [dispatch, productId])

  return (
    <>
      <h1>PRODUCT DETAILS PAGE</h1>
      <div>
        <h3>{product?.title} - ${product?.price}</h3>
        <img src={product?.image} alt={product?.title} className="details-main-photo"/>
        <p>{product?.description}</p>
      </div>
      <div className="details-reviews-container">
        <div className="reviews-header">
          REVIEWS FOR THIS PRODUCT:
        </div>
        { !reviewSubmitted &&
          <div>
            <AddReviewModal productId={productId}/>
          </div>
        }
        <div>
          <dl>
            {reviews?.map(review => (
              <dt key={review?.id} className="review-list-item-container">
                <div>{review?.title}</div>
                <div>{review?.content}</div>
                <div>{review?.rating}/5 Stars</div>
                {sessionUser && sessionUser.id == review?.user_id &&
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
