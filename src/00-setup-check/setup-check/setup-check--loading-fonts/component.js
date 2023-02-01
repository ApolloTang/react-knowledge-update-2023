export default () => {
  const fontManropeRegular = document.createElement('p')
  fontManropeRegular.className='font-manrope-regular'
  fontManropeRegular.textContent ='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

  const fontManropeLight = document.createElement('p')
  fontManropeLight.className='font-manrope-light'
  fontManropeLight.textContent ='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

  return {
    fontManropeRegular,
    fontManropeLight,
  }
}
