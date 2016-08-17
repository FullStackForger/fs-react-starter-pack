import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Layout from './components/layout';
import store from './config/store'
import routes from './config/routes'

const history = syncHistoryWithStore(hashHistory, store)

history.listen(location => {
	//analyticsService.track(location.pathname)
	console.log(JSON.stringify(location))
})

ReactDOM.render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>,
	document.getElementById('app')
);