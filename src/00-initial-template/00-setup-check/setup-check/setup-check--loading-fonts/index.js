import component from './component'
import './index.css'

// [NOTE]
//   To see fonts in action make sure you unzip monrope.zip in src/fonts/
import('./fonts')

const elements = component()
const container = document.createElement('div')
container.className='container--loading-fonts'
document.body.appendChild(container)

container.appendChild(elements.fontManropeRegular)
container.appendChild(elements.fontManropeLight)

console.info('done: setup-check--loading-fonts/index.js')
