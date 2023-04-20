---

The following is from [Kent's epic react](https://github.com/kentcdodds/advanced-react-hooks/blob/main/src/exercise/01.md#the-full-usereducer-api)

type definitions for `useReducer`:

> Thanks to [Trey's blog post](https://levelup.gitconnected.com/db1858d1fb9c)

```typescript
type Dispatch<A> = (value: A) => void
type Reducer<S, A> = (prevState: S, action: A) => S

type ReducerState<R extends Reducer<any, any>> 
  = R extends Reducer<infer S, any> 
  ? S
  : never

type ReducerAction<R extends Reducer<any, any>> 
  = R extends Reducer<any, infer A>
  ? A
  : never

function useReducer<R extends Reducer<any, any>, I>(
  reducer        : R,
  initializerArg : I & ReducerState<R>,
  initializer    : (arg: I & ReducerState<R>) => ReducerState<R>,
): [ReducerState<R>, Dispatch<ReducerAction<R>>]

function useReducer<R extends Reducer<any, any>, I>(
  reducer        : R,
  initializerArg : I,
  initializer    : (arg: I) => ReducerState<R>,
): [ReducerState<R>, Dispatch<ReducerAction<R>>]

function useReducer<R extends Reducer<any, any>>(
  reducer      : R,
  initialState : ReducerState<R>,
  initializer? : undefined,
): [ReducerState<R>, Dispatch<ReducerAction<R>>]
```

There are two things I don't understand:

1. `I & ReducerState<R>` why use intersection? 
2. `initializer?: undefined` , I think if a argment is optional it should not be undefined.



---



 [The bullet proof useReducer - Typescript (2/2) - DEV Community](https://dev.to/pffigueiredo/the-bullet-proof-usereducer-typescript-22-2kcj) 
