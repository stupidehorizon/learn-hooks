import React, { Fragment, useState, useEffect, useContext } from 'react';
import ColorBox from './color-box';
import ColorContext from './color-context';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <Fragment>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} >+</button>
      <button onClick={() => setCount(count - 1)} >-</button>
      <ColorContext.Provider value={count %2 ? 'red' : 'blue'}>
        <ColorBox />
      </ColorContext.Provider>
    </Fragment>
  );
}

export default App;
