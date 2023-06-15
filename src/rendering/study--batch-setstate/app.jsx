import React, {useState, useEffect} from "react";

function App() {
const [number, setNumber] = useState(0);
const [number2, setNumber2] = useState(0);

  useEffect(()=>{
      {console.log(Date.now())}
  })
  return (
    <>
      <h1>{number}</h1>
      <h1>{number2}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setTimeout(
          ()=>{ setNumber2(number + 1) }
          ,10
        );
        setNumber(number + 1);
      }}>+3</button>
      <button onClick={() => {
        setNumber2(number + 1);
        setNumber2(number + 1);
        setNumber2(number + 1);
      }}>+3</button>
    </>
  )
}

export {App}
