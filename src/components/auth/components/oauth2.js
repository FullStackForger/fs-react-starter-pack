import React, {Component, PropTypes} from 'react'

import storage from '../internals/storage'
import PopupButton from './popup-button'

const propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	clientId: PropTypes.string.isRequired,
	tokenEndpoint: PropTypes.string.isRequired,
	oauthEndpoint: PropTypes.string.isRequired,
	redirectUri: PropTypes.string,
	scope: PropTypes.arrayOf(PropTypes.string),
	scopePrefix: PropTypes.string,
	scopeDelimiter: PropTypes.string,
	state: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func
	]),
	requiredUrlParams: PropTypes.arrayOf(PropTypes.string),
	defaultUrlParams: PropTypes.arrayOf(PropTypes.string),
	responseType: PropTypes.string,
	responseParams: PropTypes.shape({
		code: PropTypes.string,
		clientId: PropTypes.string,
		redirectUri: PropTypes.string
	}),
	oauthType: PropTypes.string,
	popupOptions: PropTypes.shape({
		width: PropTypes.number,
		height: PropTypes.number
	}),
	polling: PropTypes.bool
}

const defaultProps = {
	name: null,
	label: null,
	tokenEndpoint: null,
	clientId: null,
	redirectUri: null,
	oauthEndpoint: null,
	scope: null,
	scopePrefix: null,
	scopeDelimiter: null,
	state: null,
	requiredUrlParams: null,
	defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
	responseType: 'code',
	responseParams: {
		code: 'code',
		clientId: 'clientId',
		redirectUri: 'redirectUri'
	},
	oauthType: '2.0',
	popupOptions: {
		width: null,
		height: null
	},
	polling: true
}

export default class OAuth2 extends Component {
	constructor(props) {
		super(props)
		//const { name, state, popupOptions, redirectUri, responseType } = params
	}

	buildQueryString() {
		const props = this.props
		const urlParamsCategories = ['defaultUrlParams', 'requiredUrlParams', 'optionalUrlParams'];
		const keyValuePairs = [];

		urlParamsCategories.forEach((paramsCategory) => {

			if (!props[paramsCategory] || !props[paramsCategory].forEach) {
				return
			}

			props[paramsCategory].forEach((paramName) => {

				let paramValue = typeof(props[paramName]) === 'function'
					? props[paramName]()
					: props[OAuth2.camelCase(paramName)]

				if (paramName === 'redirect_uri' && !paramValue) {
					return
				}

				if (paramName === 'state') {
					const stateName = props.name + '_state'
					paramValue = encodeURIComponent(storage.get(stateName))
				}

				if (paramName === 'scope' && Array.isArray(paramValue)) {
					paramValue = paramValue.join(props.scopeDelimiter)
					if (props.scopePrefix) {
						paramValue = [props.scopePrefix, paramValue].join(props.scopeDelimiter)
					}
				}

				keyValuePairs.push([paramName, paramValue])
			})
		})

		return keyValuePairs.map(pair => pair.join('=')).join('&')
	}

	onClose(queryStringData) {
		console.log(queryStringData)
	}

	render() {
		const props = this.props
		const popupProps = {
			label: props.label,
			width: props.width,
			height: props.height,
			popupUrl: [props.oauthEndpoint, this.buildQueryString()].join('?'),
			redirectUri: props.redirectUri, // todo: remove coupling with popup
			polling: props.polling,
			onClose: this.onClose
		}

		return (
			<PopupButton {...popupProps} />
		)
	}
}

OAuth2.camelCase = (name) => {
	return name.replace(/([\:\-\_]+(.))/g, (_, separator, letter, offset) => {
		return offset ? letter.toUpperCase() : letter;
	})
}

OAuth2.propTypes = propTypes
OAuth2.defaultProps = defaultProps
