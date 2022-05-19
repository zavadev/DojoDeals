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
      <div className="main-page-container">
        <div className="ad-left-container">
          <img id="left-ad" src="https://res.cloudinary.com/doulyb7dt/image/upload/v1652932910/DojoDeals/Screen_Shot_2022-05-18_at_9.01.31_PM_liribe.png" alt="advertisement" />
        </div>
        <div className="product-list-container">
          <div id="product-list-title">All Products &#x2192;</div>
          <dl className="image-list-main">
            {products?.map((product, ind) => (
              <dt key={ind} className="image-list-item">
                <div className="main-image-div">
                  <NavLink to={`/products/${product.id}`}>
                    <img src={product?.image} alt={product?.title} className="main-product-image"/>
                  </NavLink>
                  <div className="title-product">{product?.title}</div>
                  <div className="image-list-price">${product?.price}</div>
                </div>
              </dt>
            ))}
          </dl>
        </div>
        <div className="ad-right-container">
          <img id="right-ad" src="https://res.cloudinary.com/doulyb7dt/image/upload/v1652932910/DojoDeals/Screen_Shot_2022-05-18_at_9.01.31_PM_liribe.png" alt="advertisement" />
        </div>
      </div>
    </>
  )
}

export default MainPage;
