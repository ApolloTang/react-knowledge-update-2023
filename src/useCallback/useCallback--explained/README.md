

Consider the following:

```jsx
const ParentComponent = () => {
  const doSomething = () => { /* do somthing implementation */ }
  
  return <><ChildComponent doSomething={doSomething} /></>
}
```

The code show that the component `<ParentComponent />` is creating a function `doSomething` to pass it to the child component `<ChildComponent/>`. Each time the `ParentComponent` is executed (or rendered) a brand new `doSomthing` function with its new reference is recreated.   

If the `ChildComponent` is a "memo-ed" component, 

```jsx
const ChildComponent = memo(
  ({doSomething}) => <h3>{`Render child ${Date.now()}`}</h3>
);
```

We will not be able to take advantage of `memo` because  each time the is parent rendered,  `doSomething` is a new object (different reference pointer).

To make  `doSomthing` an immutable reference (caching the reference pointer), we can use the hook `useCallback`:

```jsx
const ParentComponent = () => {
  const doSomething = useCallback(() => { /* do somthing implementation */ }, [])
  
  return <><ChildComponent doSomething={doSomething} /></>
}
```

Note the **empty array in the second useCallback's actual-arguements**: 

```jsx
const doSomething = useCallback(() => { /* do somthing implementation */ }, [])
//                                                                          ^^---second useCallback's actual-arguements
```

This array let you specified a reference to watch. If it is an empthy array that means the reference to return of useCallback will not change (it is cached).















