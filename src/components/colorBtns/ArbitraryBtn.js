import React, { useEffect } from 'react';

const ArbitraryBtn = () => {
  const changeToArbitraryColor = () => document.body.style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

  useEffect(() => {
    changeToArbitraryColor()
  }, []);

  return <button className="arbitrary-btn" onClick={changeToArbitraryColor}></button>;
}

export default ArbitraryBtn;
