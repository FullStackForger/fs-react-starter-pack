import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { isBrowser } from './config/env'

const renderContainer = function () {
	const el = document.createElement('div')
	el.setAttribute('id', 'app')
	document.body.appendChild(el)
}

if (module.hot) {
	module.hot.accept('./app', function () {
		const HotApp = require('./components/App').default

		ReactDOM.render(
			<HotApp/>,
			document.getElementById('app')
		)
	})
}

renderContainer()
ReactDOM.render(
	<App/>,
	document.getElementById('app')
)