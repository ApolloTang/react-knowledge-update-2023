# This is from [Why is suppressing the dependency linter so dangerous](https://react.dev/learn/removing-effect-dependencies#why-is-suppressing-the-dependency-linter-so-dangerous)



```jsx
// file: 1a-bug/app.jsx

function App() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const onTick = () => setCount(count + increment);

  useEffect(
    () => {
      const id = setInterval(onTick, 1000);
      return () => clearInterval(id);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
 
  return (/* code not shown */)
}
```

The above behave as `onTick` function being defined inside the callback of useEffect:

```jsx
// file: 1b-bug-similar-behaviour/app.jsx

function App() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  // const onTick = () => setCount(count + increment);

  useEffect(
    () => {
      const onTick = () => setCount(count + increment);  // <--- here
      const id = setInterval(onTick, 1000);
      return () => clearInterval(id);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
 
  return (/* code not shown */)
}
```

With this the value of `count` and `increment` will be that of the first render (because dependency array of useEffect is empty).

We could improve `file: 1-bug/app.jsx` with:

```bash
diff ..../1b-bug-similar-behaviour/app.jsx ..../2-partial-fix/app.jsx
8c8
<       const onTick = () => setCount(count + increment);  // <--- here
---
>       const onTick = () => setCount(count => count + increment);
```

```jsx
// file: 2-partial-fix/app.jsx

function App() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  useEffect(
    () => {
      const onTick = () => setCount(count => count + increment);
      const id = setInterval(onTick, 1000);
      return () => clearInterval(id);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
 
  return (/* code not shown */)
}
```

With this, the counter is now counting, but increment functionality is still not working because the value of `increment` if from that of the frist render.

To fix this we tell useEffect to run its callback when enver  `increment` has change:

```jsx
// file: 3a-fix1/app.jsx

function App() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  useEffect(
    () => {
      const onTick = () => setCount(count => count + increment);
      const id = setInterval(onTick, 1000);
      return () => clearInterval(id);
    },
    [increment]  // <--- run this callback when enver `increment` has change
  );
 
  return (/* code not shown */)
}
```

An alternative is to use the build-in `useCallback` hook:

```jsx
// file: 3b-fix-with-useCallback/app.jsx

import { /*code not shown*/ useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const onTick = useCallback(
    () => setCount(count => count + increment),
    [increment]
  )

  useEffect(
    () => {
      const id = setInterval(onTick, 1000);
      return () => clearInterval(id);
    },
    [onTick]
  );

  return (/* code not shown */)
}
```

This solution utilize `useCallback` to bust caching of `onTick` function when ever the value of `increment` change, which tell useEffect to rerun its callback with new value of `count` and `increment`.

