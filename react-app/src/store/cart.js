const GET_CART = 'cart/GET_CART';
const POST_CART = 'cart/POST_CART';
const UPDATE_CART = 'cart/UPDATE_CART';
const DELETE_ONE_ENTRY = 'cart/DELETE_ONE_ENTRY';
// const DELETE_CART = 'cart/DELETE_CART';

const getCart = (cart_contents) => ({
  type: GET_CART,
  cart_contents
})

const postCartEntry = (newEntry) => ({
  type: POST_CART,
  newEntry
})

const editCartEntry = (newEntry) => ({
  type: UPDATE_CART,
  newEntry
})

const deleteOne = (entryId) => ({
  type: DELETE_ONE_ENTRY,
  entryId
})

export const getCartThunk = (userId) => async (dispatch) => {
  const response = await fetch(`/api/cart/${userId}`);
  if (response.ok) {
    const cart_contents = await response.json();
    dispatch(getCart(cart_contents));
    return response;
  }
  return response;
}

export const addEntryToCartThunk = (userId, productId) => async (dispatch) => {
  const response = await fetch(`/api/cart/${userId}/${productId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      "user_id": userId,
      "product_id": productId
    })
  })
  if (response.ok) {
    const newEntry = await response.json();
    dispatch(postCartEntry(newEntry));
    return newEntry;
  }
  return response;
}

export const editCartEntryThunk = (userId, productId, quantity) => async (dispatch) => {
  const response = await fetch(`/api/cart/${userId}/${productId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      "user_id": userId,
      "product_id": productId,
      "quantity": quantity
    })
  })
  console.log('FETCH RESPONSE------>>>>>', response)
  if (response.ok) {
    const updatedEntry = await response.json();
    dispatch(editCartEntry(updatedEntry));
    return updatedEntry;
  } else {
    console.log("=====DO WE GET IN HERE======", response);
    const data = await response.json();
    console.log("=====WE GOT AN ERROR======", data);
    return data;
  }
}

export const deleteOneEntryThunk = (userId, productId, entryId) => async (dispatch) => {
  const response = await fetch(`/api/cart/${userId}/${productId}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(deleteOne(entryId));
    console.log("SUCCESSFUL DELETION =====>>>>>>", data)
    return data;
  }
  return response;
}


const initialState = {};

const cartReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_CART:
      newState = {}
      action.cart_contents.Cart_contents.forEach(entry => newState[entry.id] = entry)
      return newState;
    case POST_CART:
      newState = { ...state, [action.newEntry.Cart_content.id]: action.newEntry.Cart_content };
      return newState;
    case UPDATE_CART:
      newState = { ...state }
      newState[action.newEntry.id] = action.newEntry;
      return newState;
    case DELETE_ONE_ENTRY:
      newState = { ...state };
      delete newState[action.entryId];
      return newState;
    default:
      return state;
  }
}

export default cartReducer;
