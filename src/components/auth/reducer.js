import core from './core'
import {AUTH_LOGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILED} from './constants'
import {AUTH_LOGOUT, AUTH_LOGOUT_SUCCESS, AUTH_LOGOUT_FAILED} from './constants'
import {AUTH_SIGNUP, AUTH_SIGNIN_SUCCESS, AUTH_SIGNUP_FAILED} from './constants'

const authReducer = (state = core.defaults.state, action) => {
	state = Object.assign(state, {
		authenticated: core.isAuthenticated(),
		token: core.getToken(),
		updated: true
	})

	switch(action.type) {

		// LOGIN && SIGNUP

		case AUTH_LOGIN:
		case AUTH_SIGNUP:
			return Object.assign(state, {
				authenticating: true,
				authenticated: false
			})
		case AUTH_LOGIN_SUCCESS:
		case AUTH_SIGNIN_SUCCESS:
			return Object.assign(state, {
				authenticated: true,
				authenticating: false
			})
		case AUTH_LOGIN_FAILED:
		case AUTH_SIGNUP_FAILED:
			return Object.assign(state, {
				authenticated: false,
				authenticating: false,
				error: action.payload.error
			})

		// LOGOUT

		case AUTH_LOGOUT:
		return Object.assign(state, {
			authenticating: true
		})
		case AUTH_LOGOUT_SUCCESS:
			return Object.assign(state, {
				authenticated: false,
				authenticating: false
			})
		case AUTH_LOGOUT_FAILED:
			return Object.assign(state, {
				authenticated: false,
				authenticating: false,
				error: action.payload.error
			})
	}

	return Object.assign(state, { updated: false })
}

export default core.interceptState(authReducer)