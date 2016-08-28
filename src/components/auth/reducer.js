import core from './core'
import * as ACT from './actions'

const authReducer = (state = core.defaults.state, action) => {
	state = Object.assign(state, {
		authenticated: core.isAuthenticated(),
		token: core.getToken(),
		updated: true
	})

	switch(action.type) {

		// LOGIN

		case ACT.AUTH_LOGIN:
		return Object.assign(state, {
			authenticating: true,
			authenticated: false
		})
		case ACT.AUTH_LOGIN_SUCCESS:
			return Object.assign(state, {
				authenticated: true,
				authenticating: false
			})
		case ACT.AUTH_LOGIN_FAILED:
			return Object.assign(state, {
				authenticated: false,
				authenticating: false,
				error: action.payload.error
			})

		// LOGOUT

		case ACT.AUTH_LOGOUT:
		return Object.assign(state, {
			authenticating: true
		})
		case ACT.AUTH_LOGOUT_SUCCESS:
			return Object.assign(state, {
				authenticated: false,
				authenticating: false
			})
		case ACT.AUTH_LOGIN_FAILED:
			return Object.assign(state, {
				authenticated: false,
				authenticating: false,
				error: action.payload.error
			})

		// SIGNUP

		case ACT.AUTH_SIGNUP:
			return Object.assign(state, {
				authenticating: true,
				authenticated: false
			})
		case ACT.AUTH_SIGNIN_SUCCESS:
			return Object.assign(state, {
				authenticated: true,
				authenticating: false
			})
		case ACT.AUTH_SIGNUP_FAILED:
			return Object.assign(state, {
				authenticated: false,
				authenticating: false,
				error: action.payload.error
			})
	}

	return Object.assign(state, { updated: false })
}

export default core.interceptState(authReducer)