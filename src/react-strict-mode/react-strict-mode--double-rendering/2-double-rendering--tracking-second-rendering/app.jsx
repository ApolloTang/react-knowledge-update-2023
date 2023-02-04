import React from "react";
import {FnComponent as Component } from '~/component-fn'
// import {ClassComponent as Component } from '~/component-class'

const App = () => {
  const [parentState, setParentState] = React.useState(1)

  const clickHandler = () => {
    console.log('----------- (parent component update state) -----------', parentState)
    setParentState((v) => ++v);
  };

  return (
    <>
      <React.StrictMode>
        <button onClick={clickHandler}>
          Update parent state to remount children {parentState}
        </button>
        <Component
          key={parentState}  /*  <--- this will force unmount */
        />
      </React.StrictMode>
    </>
  )
}

export {App}
