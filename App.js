import React, { Fragment, useState, useEffect, useMemo } from 'react';
import ColorBox from './color-box';
import ColorContext from './color-context';

const App = () => {
  const [count, setCount] = useState(0);
  const [divCount, setDivCount] = useState(1);

  useEffect(() => {
    document.title = count;
  }, [count]);

  const squareCount = useMemo(() => {
    console.log('in function');
    return count**count;
  }, [count]);


  return (
    <Fragment>
      <h1>{count} ** {count} = {squareCount}</h1>
      <button onClick={() => setCount(count + 1)} >+</button>
      <button onClick={() => setCount(count - 1)} >-</button>
      <br />
      <button onClick={() => setDivCount(divCount + 1)} >+</button>
      <button onClick={() => setDivCount(divCount - 1)} >-</button>
      <ColorContext.Provider value={count %2 ? 'red' : 'blue'}>
        {
          Array.from({length: divCount}).map(() => <ColorBox />)
        }
      </ColorContext.Provider>
    </Fragment>
  );
}

export default App;
