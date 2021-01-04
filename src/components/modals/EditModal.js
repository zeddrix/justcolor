import React from 'react'

const EditModal = () => {
  return (
    <div className="edit-color-modal modal">
      <p className="modal__description">Edit color button:</p>
      <input
        id="edit-color-input"
        className="input-field"
        type="text"
        maxLength="16"
      />
      <br />
      <div id="delete-btn" className="modal-btn">Delete</div>
      <div id="done-btn" className="modal-btn">Done</div>
    </div>
  )
}

export default EditModal
