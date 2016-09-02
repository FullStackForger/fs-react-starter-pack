import core from './core'
import {AUTH_LOGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILED} from './constants'
import {AUTH_LOGOUT, AUTH_LOGOUT_SUCCESS, AUTH_LOGOUT_FAILED} from './constants'
import {AUTH_SIGNUP, AUTH_SIGNUP_SUCCESS, AUTH_SIGNUP_FAILED} from './constants'


export default (store) => (next) => (action) => {

	switch(action.type) {
		case AUTH_LOGIN:
			core.login(action.payload).then(token => {
				store.dispatch({
					type: AUTH_LOGIN_SUCCESS,
					payload: { token: token },
				})
			}, err => {
				store.dispatch({
					type: AUTH_LOGIN_FAILED,
					payload: { error: err }
				})
			})
			break

		case AUTH_SIGNUP:
			core.signup(action.payload).then(token => {
				store.dispatch({
					type: AUTH_SIGNUP_SUCCESS,
					payload: { token: token }
				})
			}, err => {
				store.dispatch({
					type: AUTH_SIGNUP_FAILED,
					payload: { error: error }
				})
			})
			break

		case AUTH_LOGOUT:
			core.logout().then(() => {
				store.dispatch({
					type: AUTH_LOGOUT_SUCCESS
				})
			}, err => {
				store.dispatch({
					type: AUTH_LOGOUT_FAILED,
					payload: { error: err }
				})
			})
			break


	}

	next(action)
}