import React, { Fragment } from 'react';
import { initialColors } from './InitialColors';

const InitialBtns = () => {
  const changeColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <Fragment>
      {initialColors.map((color, i) =>
        <button
          className={`${color.className} uneditable-btn`}
          onMouseDown={() => changeColor(color.colorHex)}
          key={i}
        >
          {color.label}
        </button>)}
    </Fragment>
  )
}

export default InitialBtns;
