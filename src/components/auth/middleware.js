import * as actions from './actions'
import auth from './auth'

const authMiddleware = (store) => (next) => (action) => {

	console.log('authMiddleware', action, store)

	switch (action.type) {
		case actions.AUTH_LOGIN:
			auth.setToken('invalid.token.jwt')
			next({
				type: actions.AUTH_LOGIN_SUCCESS,
				payload: {
					token: auth.getToken(),
					username: 'testuser'
				}
			})
			break
		case actions.AUTH_LOGOUT:
			auth.removeToken()
			next({
				type: actions.AUTH_LOGOUT_SUCCESS
			})
			break
		case actions.AUTH_SIGNUP:
			auth.setToken('invalid.token.jwt')
			next({
				type: actions.AUTH_SIGNUP_SUCCESS,
				payload: {
					token: auth.getToken(),
					username: 'testuser'
				}
			})
			break
		default:
			next(action)
	}


}

export default authMiddleware