import React, { Fragment } from 'react';
import Arbitrary from '../colorBtns/Arbitrary';

const Palette = () => {
  return (
    <Fragment>
      <div className="palette">
        {/* <button className="red button-prop" onclick="changeColor('rgb(255, 0, 0)')">r</button> */}
        <Arbitrary />
        <button className="append-btn">
          +
				<span className="tooltiptext">No Duplicating</span>
        </button>
      </div>
      <div id="toggle-palette-btn">▼</div>
    </Fragment>
  )
}

export default Palette
