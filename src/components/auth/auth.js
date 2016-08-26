import Storage from '../storage/storage'
import * as actions from './actions'

const storage = new Storage()
const conf = {
	tokenName: 'if-token'
}

const setToken = (token) => storage.set(conf.tokenName, token)
const getToken = () => (storage.get(conf.tokenName))
const removeToken = () => storage.remove(conf.tokenName)
const isAuthenticated = () => (!!getToken())
const signup = (user, options) => setToken('some.signup.token')
const login = (user, options) => setToken('some.login.token')
const logout = () => removeToken()

export default {
	actions: actions,
	isAuthenticated: isAuthenticated,
	getToken: getToken,
	setToken: setToken,
	removeToken: removeToken
}