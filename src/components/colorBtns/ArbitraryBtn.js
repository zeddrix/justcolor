import React, { useEffect } from 'react';

const ArbitraryBtn = () => {
  const changeToArbitraryColor = () => document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  useEffect(() => {
    changeToArbitraryColor()
  }, []);

  return <button className="arbitrary-btn" onClick={changeToArbitraryColor}></button>;
}

export default ArbitraryBtn;
