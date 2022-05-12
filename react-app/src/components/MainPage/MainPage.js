import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
      <dl>
        {products?.map(product => (
          <dt key={product?.id}>
            <img src={product?.image} alt={product?.title}/>
          </dt>
        ))}
      </dl>
    </>
  )
}

export default MainPage;
