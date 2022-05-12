const GET_PRODUCTS = 'products/GET_PRODUCTS'
const GET_ONE_PRODUCT = 'products/GET_ONE_PRODUCT'

const getProducts = (products) => ({
  type: GET_PRODUCTS,
  products
})

const getOneProduct = (product) => ({
  type: GET_ONE_PRODUCT,
  product
})

export const getProductsThunk = () => async (dispatch) => {
  const response = await fetch('/api/products/')
  if (response.ok) {
    const products = await response.json();
    console.log("=====>>>>>>products in thunk<<<<<<======", products);
    dispatch(getProducts(products.products));
    return response;
  }
}

export const getOneProductThunk = (productId) => async (dispatch) => {
  const response = await fetch(`/api/products/${productId}`)
  if (response.ok) {
    const product = await response.json();
    dispatch(getOneProduct(product.product))
    return product;
  }
  return response;
}


const initialState = {};

const productsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_PRODUCTS:
      newState = {};
      action.products.forEach(product => newState[product.id] = product)
      return newState;
    case GET_ONE_PRODUCT:
      newState = {};
      newState[action.product.id] = action.product;
      return newState;
    default:
      return state;
  }
}

export default productsReducer;
