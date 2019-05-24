import React, { memo } from 'react';

const ColorBox = ({inc}) => {
  console.log('color box render');
  return <div style={{width: 200, height: 200, backgroundColor: 'red'}} ><button onClick={inc}>+</button></div>
}

export default memo(ColorBox);
