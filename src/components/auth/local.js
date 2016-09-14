import config from './internals/config'
import { fetchOpts } from './internals/defaults'
import { parseResponseToJSON, checkResponseStatus } from './internals/utils'
import { setToken, getToken, removeToken, getAuthHeader } from './shared'

export const signup = (userData, options) => {
	let {baseUrl, signupUrl} = config
	let url = baseUrl + signupUrl
	let opts = Object.assign({}, fetchOpts, {
		method: 'GET',
		body: JSON.stringify(userData)
	})

	return fetch(url, opts)
		.then(checkResponseStatus)
		.then(parseResponseToJSON)
		.then((data) => ({token: setToken(data.token)}))		
}

export const login = (userData, options) => {
	let {baseUrl, loginUrl} = config
	let url = baseUrl + loginUrl
	let opts = Object.assign({}, fetchOpts, {
		method: 'POST',
		headers: Object.assign({}, fetchOpts.headers),
		body: JSON.stringify(userData)
	})
	
	return fetch(url, opts)
		.then(checkResponseStatus)
		.then(parseResponseToJSON)
		.then((data) => ({token: setToken(data.token)}))
}

export const logout = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!!getToken()) {
				removeToken()
				resolve({success: true})
			} else {
				reject(new Error('You are trying to log out unauthenticated user.'))
			}
		})
	})
}

export const refreshToken = (options) => {
	let {baseUrl, refreshUrl} = config
	let url = baseUrl + refreshUrl
	let opts = Object.assign({}, fetchOpts, {
		method: 'GET',
		headers: Object.assign({},
			fetchOpts.headers,
			getAuthHeader()
		),
	}, options)
	return fetch(url, opts) 
		.then(checkResponseStatus)
		.then(parseResponseToJSON)
		.then((data) => ({token: setToken(data.token)}))
}