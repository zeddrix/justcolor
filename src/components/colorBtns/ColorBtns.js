import React, { Fragment, useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { initialColors } from './initialColors';
import { showEditModal } from '../../actions/modalActions';
import { changeColor, getNewColorsFromLs } from '../../actions/colorActions';

const InitialBtns = () => {
  const dispatch = useDispatch();
  const getNewColorsFromLsState = useSelector((state) => state.getNewColorsFromLsState);
  const { newColors } = getNewColorsFromLsState;

  const [combinedColors, setCombinedColors] = useState(initialColors);
  const [isCombinedColors, setIsCombinedColors] = useState(false);

  useEffect(() => {
    if (!newColors) {
      dispatch(getNewColorsFromLs());
    } else if (!isCombinedColors) {
      setCombinedColors([...initialColors, ...newColors]);
      setIsCombinedColors(true);
    }
    console.log(combinedColors);
  }, [isCombinedColors, combinedColors, newColors, dispatch]);

  return (
    <Fragment>
      {combinedColors.map((color, i) =>
        <button
          style={{ background: color.rgb }}
          onMouseDown={() => changeColor(color.rgb)}
          onDoubleClick={() => dispatch(showEditModal())}
          className={(color.rgb === 'rgb(0, 0, 0)') ? 'black' : undefined}
          key={i}
        >
          {color.colorName}
        </button>)
      }
    </Fragment >
  )
};

const mapStateToProps = state => ({
  color: state.color
});

export default connect(mapStateToProps, { getNewColorsFromLs })
  (InitialBtns);
