import {auth} from './internals'
import * as AUTH from './constants'

export default (store) => (next) => (action) => {

	switch(action.type) {
		case AUTH.SIGNUP_SUCCESS:
		case AUTH.LOGIN_SUCCESS:
			auth.setToken(action.payload.token)
			break
		case AUTH.LOGOUT:
			auth.removeToken()
			break
	}

	next(action)
}