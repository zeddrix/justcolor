import * as c from './constants';

export const changeColor = (color) => {
  document.body.style.backgroundColor = color;
};

export const getColors = () => dispatch => {
  let colors;

  if (localStorage.getItem("colors") === null) {
    colors = [];
  } else {
    colors = JSON.parse(localStorage.getItem("colors"));
  };

  dispatch({
    type: c.GET_COLORS,
    payload: colors
  });
};

export const appendNewColor = (newColor) => dispatch => {
  dispatch({
    type: c.APPEND_NEW_COLOR,
    payload: newColor
  });
};
