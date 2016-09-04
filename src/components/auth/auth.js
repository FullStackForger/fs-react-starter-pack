import { login, logout, signup } from './local'
import { isAuthenticated } from './shared'
import config from './internals/config'

import Auth from './component'
export {Auth}

export default {
	init: config.init,
	isAuthenticated,
	login,
	logout,
	signup
}