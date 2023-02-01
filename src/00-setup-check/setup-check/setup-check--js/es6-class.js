const staticPropValue = 'myStaticProp'
const classPropValue = 'myClassProp'

class MyClass {
  static myStaticProp = staticPropValue
  static getMyStaticProp = () => MyClass.myStaticProp

  myClassProp = classPropValue
  getMyClassProp = () => this.myClassProp
}

export default MyClass
export { staticPropValue, classPropValue }
