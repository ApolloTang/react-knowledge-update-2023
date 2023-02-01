import svg_ny1 from  './statics/ny1.svg'

export default (text = 'Hello world') => {
  const red = document.createElement('div')
  red.textContent='red'
  red.className='red rounded m-2 p-1'

  const green = document.createElement('div')
  green.textContent='green'
  green.className='green'

  const cat = document.createElement('div')
  cat.textContent='cat'
  cat.className='cat'

  const imgNy1 = document.createElement('img')
  imgNy1.className = 'img-ny1'
  imgNy1.src = svg_ny1

  const imgCopyLeft = document.createElement('div')
  imgCopyLeft.className='div-copy-left'
  imgCopyLeft.textContent='div-copy-left'

  return {
    red,
    green,
    cat,
    imgCopyLeft,
    imgNy1,
  }
}
