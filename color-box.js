import React, { useContext } from 'react';
import ColorContext from './color-context';

const ColorBox = () => {
  const color = useContext(ColorContext);
  return <div style={{width: 200, height: 200, backgroundColor: color}} ></div>
}

export default ColorBox;
