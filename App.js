import React, { Fragment, useState, useEffect, useMemo, useCallback } from 'react';
import ColorBox from './color-box';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]);

  const squareCount = useMemo(() => {
    console.log('in function');
    return count**count;
  }, [count]);

  const inc = useCallback(() => setCount(count => count + 1), []);
  const des = useCallback(() => setCount(count => count - 1), []);


  return (
    <Fragment>
      <h1>{count} ** {count} = {squareCount}</h1>
      <button onClick={inc} >+</button>
      <button onClick={des} >-</button>
      <br />
      <ColorBox key="1" inc={inc} />
      <ColorBox key="2" inc={inc} />
      <ColorBox key="3" inc={inc} />
      <ColorBox key="4" inc={inc} />
      <ColorBox key="5" inc={inc} />
    </Fragment>
  );
}

export default App;
