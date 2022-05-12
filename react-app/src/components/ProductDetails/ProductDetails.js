import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProductThunk } from '../../store/products';
import './ProductDetails.css';

function ProductDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector(state => Object.values(state.products)[0]);
  const reviews = useSelector(state => state.reviews);

  console.log("=====>>>>>>PRODUCT<<<<<<======", product);
  console.log("00000>>>>>>REVIEWS<<<<<<00000", reviews);


  useEffect(() => {
    dispatch(getOneProductThunk(productId))
  }, [dispatch, productId])

  return (
    <>
      <h1>PRODUCT DETAILS PAGE</h1>
      <div>
        <h3>{product?.title}</h3>
        <img src={product?.image} alt={product?.title} className="details-main-photo"/>
        <p>{product?.description}</p>
      </div>
    </>
  )
}

export default ProductDetails;
