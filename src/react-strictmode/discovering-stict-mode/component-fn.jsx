import React from "react";

function FnComponent() {
  const [fnComponentState, setFnComponentState] = React.useState(1);

  React.useEffect(() => {
    console.log("function component did mount");
    return () => {
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
    console.log('----------- clicked ------------')
    setFnComponentState((v) => ++v);
  };

  return (
    console.log("function component return") || (
      <>
        <h1>React Fn Component</h1>
        <button onClick={clickHandler}>
          Rerender Fn Component {fnComponentState}
        </button>
      </>
    )
  );
}

export { FnComponent };
