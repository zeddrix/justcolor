import React from 'react'

const AddModal = () => {
  return (
    <div className="new-color-modal modal">
      <p className="modal__description">Name your new color button:</p>
      <input
        id="new-color-input"
        className="input-field"
        type="text"
        maxLength="16"
      />
      <br />
      <div id="cancel-btn" className="modal-btn">Cancel</div>
      <div id="add-btn" className="modal-btn">Add!</div>
    </div>
  )
}

export default AddModal
