export const configOpts = {
	tokenName: 'if-token',
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