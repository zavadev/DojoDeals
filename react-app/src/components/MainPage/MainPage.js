import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getProductsThunk } from '../../store/products';
import './MainPage.css';

function MainPage() {
  const dispatch = useDispatch();
  const products = useSelector(state => Object.values(state.products))

  console.log("=====>>>>>>PRODUCTS<<<<<<======", products);

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [dispatch])

  return (
    <>
      <h1>MAIN PRODUCTS PAGE</h1>
      <dl className="image-list-main">
        {products?.map(product => (
          <div className="main-image-div">
            <NavLink key={product?.id} to={`/products/${product.id}`}>
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
