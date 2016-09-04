//import Storage from '../storage/storage'
//import defaults from './defaults'
//import uid from 'uid'



// internals.notifySubscribers = () => {
// 	setTimeout(() => {
// 		internals.subscribers.forEach(subscriber => {
// 			subscriber.fn(Object.assign(internals.state))
// 		})
// 	})
// }


// const subscribe = fn => {
// 	let id = uid()
// 	internals.subscribers.push({ id: id, fn: fn})
// 	return id
// }

// const unsubscribe = id => {
// 	internals.subscribers = internals.subscribers.filter(s => (s.id !== id))
// }

const setToken = (token) => internals.storage.set(internals.config.tokenName, token)

const getToken = () => (internals.storage.get(internals.config.tokenName))

const removeToken = () => internals.storage.remove(internals.config.tokenName)

const isAuthenticated = () => (!!getToken())




// export default {
// 	init: init,
// 	config: internals.config,		// todo: should be read only
// 	defaults: defaults,
// 	isAuthenticated: isAuthenticated,
// 	getToken: getToken,
// 	setToken: setToken,
// 	removeToken: removeToken,
// 	subscribe: subscribe,
// 	unsubscribe: unsubscribe
// }