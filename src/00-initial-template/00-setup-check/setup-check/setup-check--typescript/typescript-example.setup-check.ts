import {
  Queue,
  User,
} from './first-in-first-out--w-validator--oop'

const userQueue = new Queue<User>()
const user1= new User('John', 'Blow')
userQueue.push(user1)

console.assert(JSON.stringify(userQueue.data)===JSON.stringify([user1]), 'John Blow is push into queue' )
console.assert(JSON.stringify(userQueue.pop())===JSON.stringify(user1),  'John Blow is pop out of queue' )
console.assert(JSON.stringify(userQueue.data)===JSON.stringify([]),      'queue is now empty' )

let invalidUser = false
const userInvalid =  new User('no-surname', '')
try {
  userQueue.push(userInvalid)
} catch (err) {
  invalidUser = true
}
console.assert(invalidUser,      'Validation work' )

console.info('done: setup-check--typescript/typescript-example.setup-check.ts')
