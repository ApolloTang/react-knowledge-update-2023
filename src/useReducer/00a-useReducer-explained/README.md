# useReducer explained

To explain `useReducer`,  let's review how `Array.prototype.reduce` works:

```js
const data = [1,2,3,4,5]
const someOperation = (prev, next) => prev + next
const initialValue = 0
const reducer = (accumulator, currentItem) => {
  const nextAccumulator = someOperation(accumulator, currentItem)
  return nextAccumulator
}

const resultAfterReduce = Array.prototype.reduce.call(data, reducer, initialValue)
console.log(resultAfterReduce) // 15
```

Basically, `useReducer` is using the above idea. Let's see it in action:

```js
const _data = Array.from(data) // make a copy because we are going to mutate data

const MyReactComponent = () => {
  const [_resultAfterReduce, dispatchFunction] = useReducer(reducer, initialValue)

  _data.length ? dispatchFunction(_data.shift()) : null

  return (<div>{_resultAfterReduce}</div>) // 15
}
```

With `Array.prototype.reduce` , the `reduce` method will iterate the array; however, `useReducer` requires you to call the `dispatchFunction` to calculate the next `accumlator`. By calling the `dispatchFunction`, `MyReactComponent` will run, which will execute the  `dispatchFunction` again. This cucursion ends when the length of `_data` is `0`. 