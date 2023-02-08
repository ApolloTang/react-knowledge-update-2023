import React from "react";

function ChildComponent() {
  const mountCount = React.useRef(1)
  
  const returnCount = React.useRef(1)
  const renderCount = React.useRef(1)

  const [childComponentState, setMyComponentState] = React.useState(1);
  console.log(`childComponentState: ${childComponentState}`)

  React.useEffect(() => {
    console.log(`effect: Child did mount (mountCount: ${mountCount.current})`);
    
    if (mountCount.current === 1) {
      console.log('******** Run some effect *********')
    }
    if (mountCount.current === 2 || process.env.NODE_ENV !== 'development') {
      console.log('******** Run some effect 2nd time *********')
    }

    return () => {
      console.log(`effect: [cleanup] Child did unmount (mountCount: ${mountCount.current})`);
      mountCount.current++
    };
  }, []);


  React.useEffect(() => {
    console.log(`effect: Child each rendering, renderCount: ${renderCount.current}`);
    return () => {
      console.log(`effect: [cleanup] Child each rendering, renderCount: ${renderCount.current}`);
      renderCount.current++
    };
  });

  React.useEffect(() => {
    console.log(`effect: Child state change, childComponentState: ${childComponentState}`);
    return () => {
      console.log(`effect: [cleanup] Child state change, childComponentState: ${childComponentState}`);
    };
  }, [childComponentState]);

  const clickHandler = () => {
    console.log('----------- (child component update state) ------------')
    setMyComponentState((v) => ++v);
  };

  return (
    console.log(`Child return, returnCount: ${returnCount.current++}`) || (
      <>
        <h1>React Child Component</h1>
        <button onClick={clickHandler}>
          Update state in child Component, childComponentState: {childComponentState}
        </button>
      </>
    )
  );
}

export { ChildComponent };
