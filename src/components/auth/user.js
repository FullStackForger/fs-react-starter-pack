import config from './internals/config'
import { fetchOpts } from './internals/defaults'
import { parseResponseToJSON, checkResponseStatus } from './internals/utils'

export const getProfile = (options) => {
	let {baseUrl, profileUrl} = config
	let url = baseUrl + profileUrl
	let opts = Object.assign(fetchOpts, {
		method: 'GET'
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
		body: JSON.stringify(userData)
	}, options)
	return fetch(url, opts)
		.then(checkResponseStatus)
		.then(parseResponseToJSON)
}