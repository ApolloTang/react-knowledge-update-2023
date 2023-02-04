import React from "react";

const App = () => {
  const [someState, setSomeState] = React.useState(1)
  console.log(someState)
  return (
    <>
      <React.StrictMode>
        <ClassComponent
          key={someState+'class'}  /*  <--- this will force unmount */
        />
        <FnComponent
          key={someState+'fn'}  /*  <--- this will force unmount */
        />
        <button onClick={()=>{ setSomeState(v => ++v) }}>
          remount children {someState}
        </button>
      </React.StrictMode>
    </>
  )
}

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

const FnComponent = () => {
  React.useEffect(()=>{
    console.log('function component did mount')
    return () => {
      console.log('function component did unmount')
    }
  }/* run after each render */)
  return console.log('rendering function component') || <h1>React Fn Component</h1>
}
export {App}
