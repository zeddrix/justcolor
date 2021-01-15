import React, { Fragment, useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { showEditModal } from '../../actions/modalActions';
import { changeColor, renderAllColors } from '../../actions/colorActions';

const ColorBtns = () => {
  const dispatch = useDispatch();
  const renderAllColorsState = useSelector((state) => state.renderAllColorsState);
  const { allColors } = renderAllColorsState;
  const [allColorsRendered, setAllColorsRendered] = useState(false);

  useEffect(() => {
    if (!allColorsRendered) {
      dispatch(renderAllColors());
      setAllColorsRendered(true);
    }
    console.log(allColors);
  }, [dispatch, allColors, allColorsRendered]);

  return (
    <Fragment>
      {allColors.map((color, i) =>
        <button
          style={{ background: color.rgb }}
          onMouseDown={() => changeColor(color.rgb)}
          onDoubleClick={() => dispatch(showEditModal())}
          className={color.colorName.split(' ')[0].length > 9 ? 'word-break' :
            (color.rgb === 'rgb(0, 0, 0)') ? 'black' : undefined}
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

export default connect(mapStateToProps, { renderAllColors })
  (ColorBtns);
