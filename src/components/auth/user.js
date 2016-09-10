import config from './internals/config'
import { fetchOpts } from './internals/defaults'
import { parseResponseToJSON, checkResponseStatus } from './internals/utils'
import { getAuthHeader } from './shared'

export const getProfile = (options) => {
	let {baseUrl, profileUrl} = config
	let url = baseUrl + profileUrl
	let opts = Object.assign(fetchOpts, {
		method: 'GET',
		headers: new Headers(getAuthHeader()),
	}, options)
	return fetch(url, opts)
		.then(checkResponseStatus)
		.then(parseResponseToJSON)
}

export const updateProfile = (profileData, options) => {
	let {baseUrl, profileUrl} = config
	let url = baseUrl + profileUrl
	let opts = Object.assign(fetchOpts, {
		methid: 'PUT',
		headers: new Headers(getAuthHeader()),
		body: JSON.stringify(userData)
	}, options)
	return fetch(url, opts)
		.then(checkResponseStatus)
		.then(parseResponseToJSON)
}