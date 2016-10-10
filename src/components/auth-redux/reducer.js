import { defaultState } from './defaults'
import { auth } from './internals'
import * as ACTION from './constants'

const authReducer = (state = defaultState, action) => {
	let newState = Object.assign({}, state, {
		authenticated: auth.isAuthenticated(),
		token: auth.getToken(),
		updated: true
	})

	switch(action.type) {

		// LOGIN && SIGNUP

		case ACTION.LOGIN:
		case ACTION.SIGNUP:
			return Object.assign(newState, {
				authenticating: true,
				authenticated: false,
			})
		case ACTION.LOGIN_SUCCESS:
		case ACTION.SIGNIN_SUCCESS:
			return Object.assign(newState, {
				authenticated: true,
				authenticating: false,
				token: action.token
			})
		case ACTION.LOGIN_FAILED:
		case ACTION.SIGNUP_FAILED:
			return Object.assign(newState, {
				authenticated: false,
				authenticating: false,
				error: action.error
			})

		// LOGOUT

		case ACTION.LOGOUT:
		return Object.assign(newState, {
			authenticating: true
		})
		case ACTION.LOGOUT_SUCCESS:
			return Object.assign(newState, {
				authenticated: false,
				authenticating: false
			})
		case ACTION.LOGOUT_FAILED:
			return Object.assign(newState, {
				authenticated: false,
				authenticating: false,
				error: action.error
			})
	}

	return Object.assign(newState, { updated: false })
}

export default authReducer