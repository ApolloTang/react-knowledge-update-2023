import MyClass, { staticPropValue, classPropValue } from './es6-class.js'

const myClass = new MyClass()

console.assert(MyClass.getMyStaticProp() === staticPropValue, 'ES6 Class static property works')
console.assert(myClass.getMyClassProp() === classPropValue,   'ES6 Class property works')
console.assert(myClass.__proto__.getMyClassProp === void 0,   'ES6 Class property initializers are not on the prototype')

console.info('done: setup-check--js/es6-class.setup-check.js')
