import { isAuthenticated, getToken, setToken } from './shared'
import { login, logout, signup } from './local'
import { getProfile, updateProfile } from './user'

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
	setToken,
	getProfile,
	updateProfile
}