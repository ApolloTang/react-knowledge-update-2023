import React from "react";

function MyComponent({instanceLabel}) {
  const refState = React.useRef(1)

  const [componentState, setComponentState] = React.useState(1);

  React.useEffect(() => {
    console.log(`${instanceLabel} componentState change, componentState: ${componentState}, refState: ${refState.current}`);
    return () => {
      console.log(`${instanceLabel} (cleanup) componentState change, componentState: ${componentState}, refState: ${refState.current}`);
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
        Update Component's useRef and useState
      </button>
      <p>refState: {refState.current}</p>
      <p>componentState: {componentState}</p>
    </div>
  )
}

export { MyComponent };
