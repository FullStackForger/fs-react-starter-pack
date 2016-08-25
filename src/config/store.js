import { createStore, applyMiddleware, compose } from 'redux'

import reducers from './reducers'
import middleware from './middleware'
import DevTools from './devtools'

//const store = createStore(reducers, middleware)

const initialState = {}
const store = createStore(reducers, initialState, compose(
	applyMiddleware(...middleware),
	window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
));

export default store