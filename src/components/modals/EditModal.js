import React from 'react';
import { hideEditModal } from '../../actions/modalActions';
import { useDispatch } from "react-redux";

const EditModal = () => {
  const dispatch = useDispatch();

  return (
    <div
      id="backdrop"
      onClick={(e) => { e.target === document.querySelector("#backdrop") && dispatch(hideEditModal()); }}
    >
      <div className="edit-color-modal modal">
        <p className="modal__description">Edit color button:</p>
        <input
          id="edit-color-input"
          className="input-field"
          type="text"
          maxLength="16"
          placeholder="Enter name..."
          autoFocus
        />
        <br />
        <div id="delete-btn" className="modal-btn">Delete</div>
        <div
          id="done-btn"
          className="modal-btn"
          onClick={() => dispatch(hideEditModal())}
        >Done</div>
      </div>
    </div>
  )
}

export default EditModal
