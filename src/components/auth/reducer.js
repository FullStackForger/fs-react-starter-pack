import core from './core'
import * as ACT from './actions'

const defaultState = {
	authenticated: core.isAuthenticated(),
	token: core.getToken(core.config.tokenName)
}

const loginReducer = (state, action) => {
	const store = core.config.store

	core.login(action.payload).then(token => {
		store.dispatch({
			type: ACT.AUTH_LOGIN_SUCCESS,
			payload: { token: token },
		})
	}, err => {
		store.dispatch({
			type: ACT.AUTH_LOGIN_FAILED,
			payload: { error: err }
		})
	})

	return Object.assign(state, {
		authenticating: true
	})
}

const logoutReducer = (state, action) => {
	const store = core.config.store

	core.logout().then(() => {
		store.dispatch({
			type: ACT.AUTH_LOGOUT_SUCCESS
		})
	}, err => {
		store.dispatch({
			type: ACT.AUTH_LOGOUT_FAILED,
			payload: { error: err }
		})
	})

	return Object.assign(state, {
		leaving: true
	})
}

const signupReducer = (state, action) => {
	const store = core.config.store

	core.signup(action.payload).then(token => {
		store.dispatch({
			type: ACT.AUTH_SIGNUP_SUCCESS,
			payload: { token: token }
		})
	}, err => {
		store.dispatch({
			type: ACT.AUTH_SIGNUP_FAILED,
			payload: { error: error }
		})
	})

	return Object.assign(state, {
		authenticating: true
	})
}

const authReducer = (state = defaultState, action) => {

	switch(action.type) {

		// LOGIN

		case ACT.AUTH_LOGIN:
			return loginReducer(state, action)
		case ACT.AUTH_LOGIN_SUCCESS:
			return Object.assign(state, {
				authenticated: true,
				authenticating: false
			})
		case ACT.AUTH_LOGIN_FAILED:
			return Object.assign(state, {
				authenticated: false,
				authenticating: false,
				message: action.payload.error.message
			})

		// LOGOUT

		case ACT.AUTH_LOGOUT:
			return logoutReducer(state, action)
		case ACT.AUTH_LOGOUT_SUCCESS:
			return Object.assign(state, {
				authenticated: false,
				authenticating: false
			})
		case ACT.AUTH_LOGOUT_SUCCESS:
		case ACT.AUTH_LOGIN_FAILED:
			return Object.assign(state, {
				authenticated: false,
				authenticating: false,
				message: action.payload.error.message
			})

		// SIGNUP

		case ACT.AUTH_SIGNUP:
			return signupReducer(state, action)
		case ACT.AUTH_SIGNIN_SUCCESS:
			return Object.assign(state, {
				authenticated: true,
				authenticating: false
			})
		case ACT.AUTH_SIGNUP_FAILED:
			return Object.assign(state, {
				authenticated: false,
				authenticating: false,
				message: action.payload.error.message
			})
	}

	return Object.assign(state)
}

export default authReducer