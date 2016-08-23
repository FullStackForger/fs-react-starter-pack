export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS'
export const AUTH_SIGNUP = 'AUTH_SIGNIN'
export const AUTH_SIGNUP_SUCCESS = 'AUTH_SIGNUP_SUCCESS'
export const AUTH_SIGNUP_FAILED = 'AUTH_SIGNUP_FAILED'

export const onLogin = (userData) => ({
	type: AUTH_LOGIN,
	payload: userData
})

export const onLogout = () => ({
	type: AUTH_LOGOUT
})

export const onSignup = (userData) => ({
	type: AUTH_SIGNUP,
	payload: userData
})
