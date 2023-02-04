**Observation:**

All effects in a component  will run twice when the component remount. 

Double rerendering does not happen when the component redering due to internal state change (useState is called). 