import React, {
  useReducer, useEffect
} from "react";

const data = [1,2,3,4,5]
const someOperation = (prev, next) => prev + next
const initialValue = 0
const reducer = (accumulator, currentItem) => {
  const nextAccumulator = someOperation(accumulator, currentItem)
  return nextAccumulator
}
const resultAfterReduce = Array.prototype.reduce.call(data, reducer, initialValue)
console.log(resultAfterReduce) // 15



const _data = Array.from(data) // make a copy because we are going to mutate data

const MyReactComponent = () => {
  const [_resultAfterReduce, dispatchFunction] = useReducer(reducer, initialValue)

  _data.length ? dispatchFunction(_data.shift()) : null

  return (<div>{_resultAfterReduce}</div>) // 15
}

export {MyReactComponent as App}
