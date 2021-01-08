import React from 'react';
import { hideAppendModal } from '../../actions/modalActions';
import { useDispatch } from "react-redux";

const AppendModal = () => {
  const dispatch = useDispatch();

  return (
    <div
      id="backdrop"
      onClick={(e) => { e.target === document.querySelector("#backdrop") && dispatch(hideAppendModal()); }}
    >
      <div className="append-modal modal">
        <p className="modal__description">Name your new color button:</p>
        <input
          id="append-modal__input"
          className="input-field"
          type="text"
          maxLength="16"
          placeholder="Enter name..."
          autoFocus
        />
        <br />
        <div
          id="cancel-btn"
          className="modal-btn"
          onClick={() => dispatch(hideAppendModal())}
        >Cancel</div>
        <div id="add-btn" className="modal-btn">Add!</div>
      </div>
    </div>
  )
}

export default AppendModal;
