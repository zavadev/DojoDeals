import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteReviewForm from './DeleteReviewForm'
import './DeleteReviewForm.css';

function DeleteReviewModal({ user_id, product_id }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="delete-review-btn" onClick={() => setShowModal(true)}>Delete!</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteReviewForm setShowModal={setShowModal} user_id={user_id} product_id={product_id} />
        </Modal>
      )}
    </>
  );
}

export default DeleteReviewModal;
