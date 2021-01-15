import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showPalette, hidePalette } from '../../actions/modalActions';

const PaletteToggleBtn = () => {
  const dispatch = useDispatch();
  const togglePalette = useSelector(
    (state) => state.togglePaletteState.show
  );

  useEffect(() => {
    dispatch(showPalette())
  }, [dispatch])

  return (
    <Fragment>
      <div
        id='palette-toggle-btn'
        onClick={togglePalette ? () => dispatch(hidePalette()) : () => dispatch(showPalette())}
      >{togglePalette ? '▼' : '▲'}</div>
    </Fragment>
  );
};

export default PaletteToggleBtn;

