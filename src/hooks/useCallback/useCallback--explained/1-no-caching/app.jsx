import React from "react";

import {
  memo,
  useState,
} from 'react';


const ChildComponent = memo(
  ({doSomething}) => <h3>{`Render child ${Date.now()}`}</h3>
);

function App() {
  const [propA, setPropA] = useState(1)

  const doSomething = () => { /* do somthing implementation */ }

  return (
    <>
      <button onClick={()=>{setPropA(i=>++i)}}>
        {`render parent ${propA}`}
      </button>
      <ChildComponent doSomething={doSomething} />
    </>
  );
}

export {
  App
}

