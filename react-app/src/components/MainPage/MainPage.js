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
      <h1>MAIN PRODUCTS PAGE</h1>
      <dl className="image-list-main">
        {products?.map(product => (
          <div key={product?.id} className="main-image-div">
            <NavLink to={`/products/${product.id}`}>
              <dt>
                <img src={product?.image} alt={product?.title} className="main-product-image"/>
              </dt>
            </NavLink>
            <h3>{product?.title} - ${product?.price}</h3>
          </div>
        ))}
      </dl>
    </>
  )
}

export default MainPage;
