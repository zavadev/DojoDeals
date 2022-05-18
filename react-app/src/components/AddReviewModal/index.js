import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddReviewForm from './AddReviewForm';
import './AddReviewForm.css';

function AddReviewModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="add-review-btn" onClick={() => setShowModal(true)}>Add Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddReviewForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default AddReviewModal;
