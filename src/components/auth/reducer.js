import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGNIN } from './actions'

const defaultState = {
	authenticated: false,
	token: ''
}

const authReducer = (state = defaultState, action) => {
	switch(action) {
		case AUTH_LOGIN:
			login()
			break
		case AUTH_LOGOUT:
			logout()
			break
		case AUTH_SIGNIN:
			signup()
			break
	}
	return state
}

export default authReducer
