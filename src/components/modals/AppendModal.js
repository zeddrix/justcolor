import React from 'react'

const AppendModal = () => {
  return (
    <div id="backdrop">
      <div className="append-modal modal">
        <p className="modal__description">Name your new color button:</p>
        <input
          id="append-modal__input"
          className="input-field"
          type="text"
          maxLength="16"
          placeholder="Enter name..."
        />
        <br />
        <div id="cancel-btn" className="modal-btn">Cancel</div>
        <div id="add-btn" className="modal-btn">Add!</div>
      </div>
    </div>
  )
}

export default AppendModal;
