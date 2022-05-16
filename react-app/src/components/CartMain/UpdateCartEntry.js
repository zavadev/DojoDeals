import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCartEntryThunk } from '../../store/cart';
import './CartMain.css'

function UpdateCartEntry({ total, user_id, product_id }) {
  const dispatch = useDispatch();
  const [totalQuant, setTotalQuant] = useState(total);
  const [error, setError] = useState("");

  const editSubmit = () => {
    const quantity = +totalQuant;
    dispatch(editCartEntryThunk(user_id, product_id, quantity))
      .then((res) => {
        console.log('THIS IS THE ERROR RESPONSE----->>', res)
        if (res.Error) {
          setError(res.Error)
          setTotalQuant(total)
        } else {
          setError("")
        }
      })
      // .then(() => setError({}))
  }

  return (
    <div id="edit-div">
      <input type="number" value={totalQuant} onChange={(e) => setTotalQuant(e.target.value)} onBlur={editSubmit}/>
      <div>{error}</div>
    </div>
  )
}

export default UpdateCartEntry;
