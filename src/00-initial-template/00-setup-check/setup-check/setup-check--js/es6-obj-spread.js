const a = { a: 'a' }
const myObj = { ...a, b: 'b' }

const expected_myObj = { a: 'a', b: 'b' }

export default myObj
export { expected_myObj }
