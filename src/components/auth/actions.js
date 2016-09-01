import {AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGNUP} from './constants'

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
