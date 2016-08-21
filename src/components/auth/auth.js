import Storage from '../components/storage/storage'

const storage = new Storage()
const conf = {
	tokenName: 'if-token'
}

const setToken = (token) => storage.set(conf.tokenName, token)
const getToken = () => (storage.get(conf.tokenName))
const removeToken = () => storage.remove(conf.tokenName)
const isAuthenticated = () => (!!getToken())
const signup = (user, options) => setToken('some.random.token')
const login = (user, options) => setToken('some.random.token')
const logout = () => removeToken()

export default {
	login: login,
	signup: signup,
	logout: logout,
	isAuthenticated: isAuthenticated,
	getToken: getToken,
	removeToken: removeToken
}