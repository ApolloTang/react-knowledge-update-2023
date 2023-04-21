import React from "react";

import {
  memo,
  useState,
  useCallback
} from 'react';


const ChildComponent = memo(
  ({doSomething}) => <h3>{`Render child ${Date.now()}`}</h3>
);


function App() {
  const [propA, setPropA] = useState(1)

  const doSomething = useCallback(() => { /* do somthing implementation */ }, [propA])

  return (
    <React.StrictMode>
      <button onClick={()=>{setPropA(i=>++i)}}>
        {`render parent ${propA}`}
      </button>
      <ChildComponent doSomething={doSomething} />
    </React.StrictMode>
  );
}

export {
  App
}

