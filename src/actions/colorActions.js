import * as c from './constants';

export const changeColor = (color) => {
  document.body.style.backgroundColor = color;
};

export const getNewColorsFromLs = () => dispatch => {
  let newColors;

  if (localStorage.getItem("newColors") === null) {
    newColors = [];
  } else {
    newColors = JSON.parse(localStorage.getItem("newColors"));
  };

  dispatch({
    type: c.GET_NEW_COLORS_FROM_LS,
    payload: newColors
  });
};

export const appendNewColor = (newColor) => dispatch => {
  dispatch({
    type: c.APPEND_NEW_COLOR,
    payload: newColor
  });
};
