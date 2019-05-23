import React, { Fragment, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} >+</button>
      <button onClick={() => setCount(count - 1)} >-</button>
    </Fragment>
  );
}

export default App;
