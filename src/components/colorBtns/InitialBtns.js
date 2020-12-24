import React, { Fragment } from 'react'

const InitialBtns = () => {
  const colors = [
    {
      className: "red",
      label: "red",
      colorHex: "#FF0000",
    },
    {
      className: "blue",
      label: "blue",
      colorHex: "#0000FF",
    },
    {
      className: "yellow",
      label: "yellow",
      colorHex: "#FFFF00",
    },
    {
      className: "green",
      label: "green",
      colorHex: "green",
    },
    {
      className: "purple",
      label: "purple",
      colorHex: "#800080",
    },
    {
      className: "orange",
      label: "orange",
      colorHex: "#ffa500",
    },
    {
      className: "bluegreen",
      label: "blue green",
      colorHex: "#0d98ba",
    },
    {
      className: "blueviolet",
      label: "blue violet",
      colorHex: "#8a2be2",
    },
    {
      className: "yellowgreen",
      label: "yellow green",
      colorHex: "#9acd32",
    },
    {
      className: "redviolet",
      label: "red violet",
      colorHex: "#c71585",
    },
    {
      className: "redorange",
      label: "red orange",
      colorHex: "#ff6600",
    },
    {
      className: "yelloworange",
      label: "yellow orange",
      colorHex: "#ffae42",
    },
    {
      className: "black",
      label: "black",
      colorHex: "black"
    },
    {
      className: "white",
      label: "white",
      colorHex: "white"
    },
    {
      className: "grey",
      label: "grey",
      colorHex: "grey"
    },
  ];

  const changeColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <Fragment>
      {colors.map((color, i) =>
        <button
          className={`${color.className} uneditable-btn`}
          onMouseDown={() => changeColor(color.colorHex)}
          key={i}
        >
          {color.label}
        </button>)}
    </Fragment>
  )
}

export default InitialBtns;
