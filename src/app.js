import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory, hashHistory } from 'react-router'

import Layout from './components/layout';
import store from './config/store'
import routes from './config/routes'

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);