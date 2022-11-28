import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from "./App"
import './index.css'

ReactDom.render(
    <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>, document.querySelector("#root"))