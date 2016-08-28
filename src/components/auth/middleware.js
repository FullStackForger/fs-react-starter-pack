import * as ACT from './actions'
import core from './core'

export default (store) => (next) => (action) => {

	switch(action.type) {
		case ACT.AUTH_LOGIN:
			core.login(action.payload).then(token => {
				store.dispatch({
					type: ACT.AUTH_LOGIN_SUCCESS,
					payload: { token: token },
				})
			}, err => {
				store.dispatch({
					type: ACT.AUTH_LOGIN_FAILED,
					payload: { error: err }
				})
			})
			break

		case ACT.AUTH_SIGNUP:
			core.signup(action.payload).then(token => {
				store.dispatch({
					type: ACT.AUTH_SIGNUP_SUCCESS,
					payload: { token: token }
				})
			}, err => {
				store.dispatch({
					type: ACT.AUTH_SIGNUP_FAILED,
					payload: { error: error }
				})
			})
			break

		case ACT.AUTH_LOGOUT:
			core.logout().then(() => {
				store.dispatch({
					type: ACT.AUTH_LOGOUT_SUCCESS
				})
			}, err => {
				store.dispatch({
					type: ACT.AUTH_LOGOUT_FAILED,
					payload: { error: err }
				})
			})
			break


	}

	next(action)
}