import React from "react";

function MyComponent({instanceLabel}) {
  const refState = React.useRef(1)
  const mountCount = React.useRef(1)

  const [componentState, setComponentState] = React.useState(1);

  React.useEffect(() => {
    if (mountCount.current === 1) {
      console.log(`${instanceLabel} did mount (first rendering)`);
    }
    if (mountCount.current === 2 || process.env.NODE_ENV !== 'development') {
      console.log(`${instanceLabel} did mount (second rendering)`);
    }

    return () => {
      if (mountCount.current === 1) {
        console.log(`   ${instanceLabel} did unmount (first rendering)`);
      }
      if (mountCount.current === 2 || process.env.NODE_ENV !== 'development') {
        console.log(`   ${instanceLabel} did unmount (second rendering)`);
      }
      mountCount.current++
    };
  }, []);

  React.useEffect(() => {
    console.log("1, componentState change", Date.now());
    return () => {
      console.log("2,   componentState change cleanup", Date.now());
    };
  }, [componentState]);

  const clickHandler = () => {

    console.log(`----------- ${instanceLabel} update -------------`);
    refState.current++
    setComponentState((v) => ++v);
  };

  return (
    <div style={{'border': '1px red solid', 'padding': '5px', 'margin': '10px'}}>
      <h2>{instanceLabel}</h2>
      <button onClick={clickHandler}>
        Update Component
      </button>
      <p>refState: {refState.current}</p>
      <p>componentState: {componentState}</p>
    </div>
  )
}

export { MyComponent };
