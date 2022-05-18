import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getProductsThunk } from '../../store/products';
import './MainPage.css';

function MainPage() {
  const dispatch = useDispatch();
  const products = useSelector(state => Object.values(state.products))

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [dispatch])

  return (
    <>
      <h1 id="main-heading">MAIN PRODUCTS PAGE</h1>
      <div className="main-page-container">
        <div className="ad-left-container">
          ADS LEFT
        </div>
        <div className="product-list-container">
          <dl className="image-list-main">
            {products?.map(product => (
              <dt key={product?.id}>
                <div className="main-image-div">
                  <NavLink to={`/products/${product.id}`}>
                    <img src={product?.image} alt={product?.title} className="main-product-image"/>
                  </NavLink>
                  <div className="title-price">{product?.title} - ${product?.price}</div>
                </div>
              </dt>
            ))}
          </dl>
        </div>
        <div className="ad-right-container">
          ADS RIGHT
        </div>
      </div>
    </>
  )
}

export default MainPage;
