import { createStore, applyMiddleware, compose } from 'redux'
import { isBrowser } from './env'

import reducers from './reducers'
import middleware from './middleware'
import DevTools from './devtools'

const initialState = {}
const enhancers = [
	applyMiddleware(...middleware)
]

if (isBrowser) {
	enhancers.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument())
}

const middlewares = compose.apply(null, enhancers)

const store = createStore(reducers, initialState, middlewares)

export default store