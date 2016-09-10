import { auth, dispatch } from './internals'
import * as AUTH from './constants'

export const login = (userData) => {
	dispatch(AUTH.LOGIN, userData)
	return auth
		.login(userData)
		.then((token)=> {
			dispatch(AUTH.LOGIN_SUCCESS, { token })
		})
		.catch((error) => {
			console.error(error.trace)
			dispatch(AUTH.LOGIN_FAILED, null, error)
		})	
}

export const logout = () => {
	dispatch(AUTH.LOGOUT)
	return auth
		.logout()
		.then(()=> {
			dispatch(AUTH.LOGOUT_SUCCESS, { })
		})
		.catch((error) => {
			console.error(error.trace)
			dispatch(AUTH.LOGIN_FAILED, null, error)
		})	
}

export const signup = (userData) => {
	dispatch(AUTH.SIGNUP, userData)
	return auth
		.signup(userData)
		.then((token)=> {
			dispatch(AUTH.SIGNUP_SUCCESS, { token })
		})
		.catch((error) => {
			console.error(error.trace)
			dispatch(AUTH.SIGNUP_FAILED, null, error)
		})	
}