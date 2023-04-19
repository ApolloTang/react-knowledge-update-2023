import React from "react";

import { memo, useState } from 'react';

function App() {
  const [propA, setPropA] = useState(1)
  const [propB, setPropB] = useState(1)
  return (
    <>
      <button onClick={()=>{setPropA(i=>++i)}}>
        {`render parent and child ${propA}`}
      </button>
      <button onClick={()=>{setPropB(i=>++i)}}>
        {`render parent only ${propB}`}
      </button>
      <WillRenderWhenPropAChange propA={propA} />
    </>
  );
}

const WillRenderWhenPropAChange = memo(
  ({propA}) => <h3>{`Render child ${propA}`}</h3>
);


export {
  App
}

