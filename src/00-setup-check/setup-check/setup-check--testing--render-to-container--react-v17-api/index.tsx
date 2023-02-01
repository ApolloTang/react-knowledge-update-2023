import React from 'react'
import ReactDOM from 'react-dom'
const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)


const MyComponent = () => (
  <div id="my-component">
   <span style={{ color: 'red' }}> Hello World </span>
  </div>
)

export default MyComponent

ReactDOM.render(
  <MyComponent />,
  document.getElementById('app')
);

