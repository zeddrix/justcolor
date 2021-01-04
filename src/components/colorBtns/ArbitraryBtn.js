import React, { useEffect } from 'react';

const ArbitraryBtn = () => {
  useEffect(() => {
    changeToArbitraryColor()
  }, []);

  return <button className="arbitrary-btn" onClick={changeToArbitraryColor}></button>;
}

const rgbToHex = (rgb) => {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

const fullColorHex = (r, g, b) => {
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return red + green + blue;
};

const getArbitraryColorValue = () => {
  return Math.floor(Math.random() * 256);
};

const changeToArbitraryColor = () => {
  const aColor = fullColorHex(
    getArbitraryColorValue(),
    getArbitraryColorValue(),
    getArbitraryColorValue()
  );
  document.body.style.backgroundColor = "#" + aColor;
};

export default ArbitraryBtn;
