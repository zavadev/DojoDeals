import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProductThunk } from '../../store/products';
import './ProductDetails.css';

function ProductDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const fetchedProd = useSelector(state => Object.values(state.products)[0]);
  const product = fetchedProd?.product
  const reviews = fetchedProd?.reviews

  console.log("=====>>>>>>PRODUCT<<<<<<======", product);
  console.log("00000>>>>>>REVIEWS<<<<<<00000", reviews);

  useEffect(() => {
    dispatch(getOneProductThunk(productId))
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
        <div>
          <button>Add Review</button>
        </div>
        <div>
          <dl>
            {reviews?.map(review => (
              <dt key={review?.id} className="review-list-item-container">
                <div>{review?.title}</div>
                <div>{review?.content}</div>
                <div>{review?.rating}/5 Stars</div>
              </dt>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}

export default ProductDetails;
