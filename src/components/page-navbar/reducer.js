import auth from '../components/auth/auth'

const defaultState = {
	authenticated: false
}

const navbarReducer = (state = defaultState, actoin) => {
	return Object.assign(defaultState, {
		authenticated: auth.isAuthenticated()
	})
}