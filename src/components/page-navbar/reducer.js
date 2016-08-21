import auth from '../auth/auth'

const defaultState = {
	authenticated: false
}

const navbarReducer = (state = defaultState, action) => {
	return Object.assign(defaultState, {
		authenticated: auth.isAuthenticated()
	})
}

export default navbarReducer