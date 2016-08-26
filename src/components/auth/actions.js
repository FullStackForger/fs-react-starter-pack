export const AUTH_LOGIN 					= '@AUTH/LOGIN'
export const AUTH_LOGIN_SUCCESS 	= '@AUTH/LOGIN_SUCCESS'
export const AUTH_LOGIN_FAILED 		= '@AUTH/LOGIN_FAILED'
export const AUTH_LOGOUT 					= '@AUTH/LOGOUT'
export const AUTH_LOGOUT_SUCCESS 	= '@AUTH/LOGOUT_SUCCESS'
export const AUTH_SIGNUP 					= '@AUTH/SIGNIN'
export const AUTH_SIGNUP_SUCCESS 	= '@AUTH/SIGNUP_SUCCESS'
export const AUTH_SIGNUP_FAILED 	= '@AUTH/SIGNUP_FAILED'

export const login = (userData) => ({
	type: AUTH_LOGIN,
	payload: userData
})

export const logout = () => ({
	type: AUTH_LOGOUT
})

export const signup = (userData) => ({
	type: AUTH_SIGNUP,
	payload: userData
})
