**Observation:**

All effects in a component  will run twice when the component remount. 

Double rerendering does not happen when the component rerender (due to internal state change, i.e., `useState` is called). 