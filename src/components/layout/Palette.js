import React, { Fragment } from 'react';
import Arbitrary from '../colorBtns/Arbitrary';
import InitialBtns from '../colorBtns/InitialBtns';

const Palette = () => {
  return (
    <Fragment>
      <div className="palette">
        <Arbitrary />
        <button className="append-btn">
          +
				<span className="tooltiptext">No Duplicating</span>
        </button>
        <InitialBtns />
      </div>
      <div id="toggle-palette-btn">▼</div>
    </Fragment>
  )
}

export default Palette;
