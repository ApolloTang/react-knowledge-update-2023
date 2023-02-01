import component from './component'
import './index.css'

const elements = component()

const container = document.createElement('div')
container.className='container--loading-images'
document.body.appendChild(container)

container.appendChild(elements.red)
container.appendChild(elements.green)
container.appendChild(elements.cat)
container.appendChild(elements.imgCopyLeft)
container.appendChild(elements.imgNy1)

console.info('done: setup-check--loading-images/index.js')
