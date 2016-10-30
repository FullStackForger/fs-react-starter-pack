import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Router, RouterContext } from 'react-router'
import { Auth } from 'react-jwt-auth-redux'

import {history, store} from '../config/store'
import routes from '../config/routes'
import {isBrowser} from '../config/env'

const authConfig = {
	store: store,
	baseUrl: 'http://localhost:8080/api/'
}

const defaultProps = {
	renderProps: {}
}

export default class App extends Component{
	constructor (props) {
		super(props)
	}

	render() {
		const router = isBrowser
			? <Router {...{history, routes}} />
			: <RouterContext {...this.props.renderProps} />

		return (
			<div>
				<div>{JSON.stringify(this.props.renderProps)}</div>
				<hr />
				<Provider store={store}>
					<Auth {...authConfig}>
						{router}
					</Auth>
				</Provider>
			</div>
		)

		// return (
		// 	<Provider store={store}> b
		// 		<Auth {...authConfig}>
		// 			{router}
		// 		</Auth>
		// 	</Provider>
		// )
	}
}

App.defaultProps = defaultProps