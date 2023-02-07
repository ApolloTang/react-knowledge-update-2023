**Observation:**

- All effects in a component  will execute twice when the component remount. 

- The clean up of effects of second execution occurs after remount.
- This double execution does not happen when the component internal state change  (i.e., `useState` is called). 