import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGNIN } from './actions'
import auth from './auth'
import * as actions from './actions'

const defaultState = {
	authenticated: auth.isAuthenticated(),
	token: auth.getToken()
}

const authReducer = (state = defaultState, action) => {
	switch(action) {
		case actions.AUTH_LOGIN_SUCCESS:
			state = Object.assign(state, { authenticated: true })
			debugger;
			break
		case actions.AUTH_LOGOUT_SUCCESS:
			state = Object.assign(state, { authenticated: false })
			break
		case actions.AUTH_SIGNIN_SUCCESS:
			state = Object.assign(state, { authenticated: false })
			break
		default:
			state = Object.assign(state)
			break
	}

	console.log('authReducer', state, action)
	return state
}

export default authReducer