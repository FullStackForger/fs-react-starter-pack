import { auth } from './internals'
import { login, logout, signup, refreshToken } from './wrapped-local'

import Auth from './components/auth'
export {Auth}

import authMiddleware from './middleware'
export { authMiddleware }

import authReducer from './reducer'
export { authReducer }

const isAuthenticated = auth.isAuthenticated

export default Object.assign({}, auth, {
	Auth,
	authMiddleware,
	isAuthenticated,
	login,
	logout,
	signup,
	refreshToken
})