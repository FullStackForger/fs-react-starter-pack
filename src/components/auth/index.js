import { isAuthenticated, getToken, setToken, getAuthHeader } from './shared'
import { login, logout, signup, refreshToken } from './local'
import { getProfile, updateProfile } from './user'

import Facebook from './components/facebook'
export { Facebook }

import config from './internals/config'

import Auth from './components/auth'
export {Auth}

export default {
	init: config.init,
	Auth,
	Facebook,
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