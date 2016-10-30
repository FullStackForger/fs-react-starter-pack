import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { isBrowser } from './env'

import reducers from './reducers'
import middleware from './middleware'
import DevTools from './devtools'

const internal = {
	store: null,
	history: null
}

// create getters
const external = {}
Object.keys(internal).forEach(function (key) {
	if (key === "default") return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			if (internal[key] === null) {
				throw new Error(`Store hasn't been initialized yet. Use initStore() method to configure store.`)
			}
			return internal[key]
		}
	})
})

export const initStore = function(history, initialState) {
	const enhancers = [
		applyMiddleware(routerMiddleware(history)),
		applyMiddleware(...middleware)
	]

	const devTools = []
	if (isBrowser) {
		devTools.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument())
	}

	internal.store = createStore(reducers, initialState, compose(
		...enhancers,
		...devTools
	))

	internal.history = syncHistoryWithStore(history, internal.store)
	return external
}

// export getters
export default external