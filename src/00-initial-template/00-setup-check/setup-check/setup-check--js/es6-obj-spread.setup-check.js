import myObj, { expected_myObj } from './es6-obj-spread.js'
console.assert(JSON.stringify(myObj) === JSON.stringify(expected_myObj), 'ES6 spread works')

console.info('done: setup-check--js/es6-obj-spread.setup-check.js')
