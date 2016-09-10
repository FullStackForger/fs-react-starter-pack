import { auth } from './internals' 
import { login, logout, signup } from './wrapped-local'

import AuthRedux from './component'
export {AuthRedux}

import authMiddleware from './middleware'
export { authMiddleware }

import authReducer from './reducer'
export { authReducer }

const isAuthenticated = auth.isAuthenticated

export default Object.assign({}, auth, {
	component: AuthRedux,
	authMiddleware,
	isAuthenticated,
	login,
	logout,
	signup
})