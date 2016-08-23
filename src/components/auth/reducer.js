import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGNIN } from './actions'
import auth from './auth'
import * as actions from './actions'

const defaultState = {
	authenticated: auth.isAuthenticated(),
	token: auth.getToken()
}

const authReducer = (state = defaultState, action) => {
	console.log('authReducer', state, action)
	switch(action) {
		case actions.AUTH_LOGIN:
			return Object.assign(state, { authenticated: true })
		case actions.AUTH_LOGOUT:
			return Object.assign(state, { authenticated: false })
		case actions.AUTH_SIGNIN:
			return Object.assign(state, { authenticated: false })
	}
	return state
}

export default authReducer