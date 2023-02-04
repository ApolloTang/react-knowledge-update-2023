import React from "react";

function FnComponent() {
  const mountCount = React.useRef(1)

  const [fnComponentState, setFnComponentState] = React.useState(1);

  React.useEffect(() => {
    console.log("function component did mount");

    console.log('mountCount: ', mountCount.current)
    if (mountCount.current === 1) {
      console.log('******** Run some effect *********')
    }
    if (mountCount.current === 2 || process.env.NODE_ENV !== 'development') {
      console.log('******** Run some effect 2nd time *********')
    }

    return () => {
      mountCount.current++
      console.log("   function component did unmount");
    };
  }, []);

  React.useEffect(() => {
    console.log("state change");
    return () => {
      console.log("   state change cleanup");
    };
  }, [fnComponentState]);

  React.useEffect(() => {
    console.log("effect on each rendering");
    return () => {
      console.log("   effect on each rendering cleanup");
    };
  });

  const clickHandler = () => {
    console.log('----------- (child component update state) ------------')
    setFnComponentState((v) => ++v);
  };

  return (
    console.log("function component return") || (
      <>
        <h1>React Fn Component</h1>
        <button onClick={clickHandler}>
          Update state in child Component {fnComponentState}
        </button>
      </>
    )
  );
}

export { FnComponent };
