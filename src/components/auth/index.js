import { login, logout, signup } from './local'
import { isAuthenticated, getToken, setToken } from './shared'
import config from './internals/config'

import Auth from './component'
export {Auth}

export default {	
	init: config.init,
	component: Auth,
	isAuthenticated,
	login,
	logout,
	signup,
	getToken,
	setToken
}