import enverse from 'enverse'
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Router, RouterContext } from 'react-router'
import { Auth } from 'react-jwt-auth-redux'

import {history, store} from '../config/store'
import routes from '../config/routes'

const defaultProps = {
	renderProps: {}
}

export default class App extends Component{
	constructor (props) {
		super(props)
	}

	render() {
		const router = enverse.is.browser
			? <Router history={history} routes={routes} />
			: <RouterContext {...this.props.renderProps} />

		return (
			<Provider store={store}>
				<Auth store={store} baseUrl="http://localhost:8080/api/">
					{router}
				</Auth>
			</Provider>
		)
	}
}

App.defaultProps = defaultProps