export const configOpts = {
	tokenName: 'if-token',
	authHeader: 'Authorization',
	authToken: 'Bearer',
	baseUrl: '/',
	loginUrl: 'auth/login',
	signupUrl: 'auth/signup',
	profileUrl: 'me'
}

export const fetchOpts = {
	method: 'POST',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
}