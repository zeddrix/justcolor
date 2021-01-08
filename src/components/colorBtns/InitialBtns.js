import React, { Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { initialColors } from './InitialColors';
import { showEditModal } from '../../actions/modalActions';
import EditModal from '../modals/EditModal';

const InitialBtns = () => {
  const dispatch = useDispatch();

  const toggleShowEditModal = useSelector(
    (state) => state.toggleShowEditModalState.show
  );

  const changeColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <Fragment>
      {initialColors.map((color, i) =>
        <button
          className={color.className}
          onMouseDown={() => changeColor(color.colorHex)}
          onDoubleClick={() => dispatch(showEditModal())}
          key={i}
        >
          {color.label}
        </button>)}
      {toggleShowEditModal && <EditModal />}
    </Fragment>
  )
}

export default InitialBtns;
