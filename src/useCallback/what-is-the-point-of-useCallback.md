

Consider the following:

```jsx
const ParentComponent = () => {
  const doSomething = () => { /* do somthing implementation */ }
  
  return <><ChildComponent onClick={doSomething} /></>
}
```

The code show that the component `<ParentComponent />` create a function `doSomething` and past it to the child component `<ChildComponent/>`. Each time the `ParentComponent` is executed (or rendered) a brand new `doSomthing` function with its new reference is recreated.   and past to the child. 



