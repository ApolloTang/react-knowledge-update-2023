import component from '~/component'
import '~/main.css'

const header = document.createElement('h1')
header.textContent = 'app 01'
document.body.appendChild(header)

const elements = component()
console.log(elements)

document.body.appendChild(elements.red)
document.body.appendChild(elements.green)
