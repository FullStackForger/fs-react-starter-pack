import Storage from '../storage/storage'
import uid from 'uid'

const defaults = {
	config: {
		tokenName: 'if-token',
		store: null
	},
	state: {
		authenticating: false,
		authenticated: false,
		token: null,
		error: null,
		updated: false
	}
}

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

const signup = (user, options) => (new Promise((resolve, reject) => {
	setTimeout(() => {
		setToken('some.signup.token')
		internals.notifySubscribers()
		resolve(getToken())
	}, 10)
}))

const login = (user, options) => (new Promise((resolve, reject) => {
	setTimeout(() => {
		setToken('some.login.token')
		resolve(getToken())
	}, 10)
}))

const logout = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!!getToken()) {
				removeToken()
				resolve({success: true})
			} else {
				reject(new Error('You are trying to log out unauthenticated user.'))
			}
		})
	})
}

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
	config: internals.config,
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