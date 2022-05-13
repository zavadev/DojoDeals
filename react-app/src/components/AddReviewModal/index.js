import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddReviewForm from './AddReviewForm';
import './AddReviewForm.css';

function AddReviewModal({ productId }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="add-review-btn" onClick={() => setShowModal(true)}>Add Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddReviewForm setShowModal={setShowModal} productId={productId}/>
        </Modal>
      )}
    </>
  );
}

export default AddReviewModal;
