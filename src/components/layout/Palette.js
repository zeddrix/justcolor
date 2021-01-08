import React, { Fragment } from 'react';
import ArbitraryBtn from '../colorBtns/ArbitraryBtn';
import InitialBtns from '../colorBtns/InitialBtns';
import AppendBtn from '../colorBtns/AppendBtn';

const Palette = () => {
  return (
    <Fragment>
      <div className="palette">
        <ArbitraryBtn />
        <AppendBtn />
        <InitialBtns />
      </div>
      <div id="palette-toggle-btn">▼</div>
    </Fragment>
  )
}

export default Palette;
