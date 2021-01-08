import React, { Fragment } from 'react';
import { useDispatch } from "react-redux";
import { initialColors } from './InitialColors';
import { showEditModal } from '../../actions/modalActions';

const InitialBtns = () => {
  const dispatch = useDispatch();

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
    </Fragment>
  )
}

export default InitialBtns;
