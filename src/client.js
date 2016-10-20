import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { isBrowser } from './config/env'

const renderContainer = function () {
	const el = document.createElement('div')
	el.setAttribute('id', 'app')
	document.body.appendChild(el)
}

renderContainer()
ReactDOM.render(
	<App/>,
	document.getElementById('app')
)