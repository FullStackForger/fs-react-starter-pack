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

		console.log('isBrowser: ' + enverse.is.browser + ':' + (new Date()).getTime() )

		return (
			<div>
				<div>{JSON.stringify(this.props.renderProps)}</div>
				<hr />
				<Provider store={store}>
					<Auth store={store} baseUrl="http://localhost:8080/api/">
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