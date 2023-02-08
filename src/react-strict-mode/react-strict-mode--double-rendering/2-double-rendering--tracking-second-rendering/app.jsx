import React from "react";
import {ChildComponent} from '~/component-fn'
// import {ClassComponent as MyComponent } from '~/component-class'

console.log('---------(start)--------')
const App = () => {
  const [parentState, setParentState] = React.useState(1)
  console.log(`parentState: ${parentState}`)

  const clickHandler = () => {
    setParentState((v) => ++v);
    console.log(`----------- (parent component update) -----------`)
  };

  return (
    <>
      <React.StrictMode>
        <button onClick={clickHandler}>
          Update parent state to remount children, parentState: {parentState}
        </button>
        <ChildComponent
          instanceLabel={"[child A]"}
          key={parentState}  /*  <--- this will force unmount */
        />
      </React.StrictMode>
    </>
  )
}

export {App}
