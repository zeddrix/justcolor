import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { initialColors } from './InitialColors';
import { showEditModal } from '../../actions/modalActions';
import { changeColor, getColors } from '../../actions/colorActions';

const InitialBtns = () => {
  const dispatch = useDispatch();
  const colorState = useSelector((state) => state.colorState);
  const { colors } = colorState;
  const [combinedColors, setCombinedColors] = useState(initialColors);
  const [isCombinedColors, setIsCombinedColors] = useState(false);

  useEffect(() => {
    if (!colors) {
      dispatch(getColors());
    } else {
      if (!isCombinedColors) {
        setCombinedColors([...initialColors, ...colors]);
        setIsCombinedColors(true);
      }
      // console.log(combinedColors);
    };
  }, [isCombinedColors, combinedColors, colors, dispatch]);

  return (
    <Fragment>
      {combinedColors.map((color, i) =>
        <button
          style={{ background: color.rgb }}
          onMouseDown={() => changeColor(color.rgb)}
          onDoubleClick={() => dispatch(showEditModal())}
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

export default connect(mapStateToProps, { getColors })
  (InitialBtns);
