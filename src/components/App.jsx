import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { Auth } from 'react-jwt-auth-redux'

import history from '../config/history'
import store from '../config/store'
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
			? <Router history={history} routes={routes} />
			: <Router {...this.props.renderProps} />

		return (
			<Provider store={store}>
				<Auth {...authConfig}>
					{router}
				</Auth>
			</Provider>
		)
	}
}

App.defaultProps = defaultProps