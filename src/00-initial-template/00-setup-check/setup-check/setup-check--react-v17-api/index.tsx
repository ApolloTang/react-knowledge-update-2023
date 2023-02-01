import React from "react";
import ReactDOM from "react-dom";
import {App} from "./app.jsx";

const reactContainer = document.createElement('div')
reactContainer.innerText =  'react component goes here'
reactContainer.id = 'root--react-v17api'
document.body.appendChild(reactContainer)

ReactDOM.render(<App />, document.getElementById("root--react-v17api"));


