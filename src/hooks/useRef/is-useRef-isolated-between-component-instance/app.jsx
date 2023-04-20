import React from "react";
import {MyComponent} from '~/component-fn'

console.log('---------(start)--------')
const App = () => {
  const [parentState1, setParentState1] = React.useState(1)
  const [parentState2, setParentState2] = React.useState(1)

  const clickHandler1 = () => {
    setParentState1((v) => ++v);
    console.log(`----------- (parent component update parentState1 [instance A]) -----------`)
  };

  const clickHandler2 = () => {
    setParentState2((v) => ++v);
    console.log(`----------- (parent component update parentState2 [instance B]) -----------`)
  };

  return (
    <>
      <React.StrictMode>
        <button onClick={clickHandler1}>
          Update parent state to remount [instance A], parrentState1: {parentState1}
        </button>
        <MyComponent
          instanceLabel={"[instance A]"}
          key={parentState1+'1'}  /*  <--- this will force unmount */
        />
        <br></br>
        <br></br>
        <button onClick={clickHandler2}>
          Update parent state to remount [instance B], parrentState1:  {parentState2}
        </button>
        <MyComponent
          instanceLabel={"[instance B]"}
          key={parentState2+'2'}  /*  <--- this will force unmount */
        />

      </React.StrictMode>
    </>
  )
}

export {App}
