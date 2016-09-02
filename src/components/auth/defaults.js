export default {
	config: {
		tokenName: 'if-token',
		baseUrl: '/',
		loginUrl: 'auth/login',
		signupUrl: 'auth/signup',
		store: null
	},
	state: {
		authenticating: false,
		authenticated: false,
		token: null,
		error: null,
		updated: false,
	},
	fetchOpts: {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}
}