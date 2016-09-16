import { isAuthenticated, getToken, setToken, getAuthHeader } from './shared'
import { login, logout, signup, refreshToken } from './local'
import { getProfile, updateProfile } from './user'

import config from './internals/config'

import Auth from './components/auth'
export {Auth}

export default {
	init: config.init,
	Auth: Auth,
	isAuthenticated,
	login,
	logout,
	signup,
	getToken,
	setToken,
	refreshToken,
	getAuthHeader,
	getProfile,
	updateProfile
}