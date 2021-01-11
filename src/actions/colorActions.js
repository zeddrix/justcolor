import { GET_COLORS } from './constants';

export const changeColor = (color) => {
  document.body.style.backgroundColor = color;
};

export const getColors = () => dispatch => {
  let colors;

  if (localStorage.getItem("colors") === null) {
    colors = [];
  } else {
    colors = JSON.parse(localStorage.getItem("colors"));
  }

  dispatch({
    type: GET_COLORS,
    payload: colors
  });
};