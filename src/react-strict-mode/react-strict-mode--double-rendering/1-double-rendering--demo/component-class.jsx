import React from "react";

class ClassComponent extends React.Component {
  componentDidUpdate() {
    console.log('class component did update')
  }

  componentDidMount() {
    console.log('class component did mount')
  }

  componentWillUnmount() {
    console.log('class component will unmount')
  }

  render() {
    console.log('rendering class component')
    return <h1>React Class Component</h1>
  }
}

export {ClassComponent}
