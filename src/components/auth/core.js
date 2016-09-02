import Storage from '../storage/storage'
import defaults from './defaults'
import uid from 'uid'

const internals = {
	initialized: false,
	subscribers: [],
	config: Object.assign({}, defaults.config),
	state: Object.assign({}, defaults.state),
	storage: new Storage()
}

internals.notifySubscribers = () => {
	setTimeout(() => {
		internals.subscribers.forEach(subscriber => {
			subscriber.fn(Object.assign(internals.state))
		})
	})
}

internals.checkResponseStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

internals.parseResponseToJSON = (response) => {
  return response.json()
}

const init = opts => {
	for (var key in opts) {
		if (internals.config.hasOwnProperty(key)) {
			internals.config[key] = opts[key]
		}
	}
	internals.initialized = true
}

const subscribe = fn => {
	let id = uid()
	internals.subscribers.push({ id: id, fn: fn})
	return id
}

const unsubscribe = id => {
	internals.subscribers = internals.subscribers.filter(s => (s.id !== id))
}

const setToken = (token) => internals.storage.set(internals.config.tokenName, token)

const getToken = () => (internals.storage.get(internals.config.tokenName))

const removeToken = () => internals.storage.remove(internals.config.tokenName)

const isAuthenticated = () => (!!getToken())


const interceptState = (reducer) => (state, action) => {
	internals.state = reducer(state, action)
	if (internals.state.updated) {
		internals.notifySubscribers()
	}
	return internals.state
}

export default {
	init: init,
	interceptState: interceptState,
	config: internals.config,		// todo: should be read only
	defaults: defaults,
	isAuthenticated: isAuthenticated,
	login: login,
	logout: logout,
	signup: signup,
	getToken: getToken,
	setToken: setToken,
	removeToken: removeToken,
	subscribe: subscribe,
	unsubscribe: unsubscribe
}