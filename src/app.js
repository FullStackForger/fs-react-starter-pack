import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import { Auth } from './components/auth/auth'

import Layout from './components/layout';
import history from './config/history'
import store from './config/store'
import routes from './config/routes'


ReactDOM.render(
	<Provider store={store}>
		<Auth store={store}>
			<Router history={history} routes={routes} />
		</Auth>
	</Provider>,
	document.getElementById('app')
);