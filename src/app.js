import React from 'react';
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import { Auth } from 'react-jwt-auth-redux'

import history from './config/history'
import store from './config/store'
import routes from './config/routes'

const authConfig = {
	store: store,
	baseUrl: 'http://localhost:8080/api/'
}

export default () => (
	<Provider store={store}>
		<Auth {...authConfig}>
			<Router history={history} routes={routes} />
		</Auth>
	</Provider>
)