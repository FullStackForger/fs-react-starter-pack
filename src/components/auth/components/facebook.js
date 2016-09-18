import React, { Component, PropTypes } from 'react'
import OAuth2 from './oauth2'

const defaultProps = {
	clientId: null,
	name: 'facebook',
	label: 'Login with Facebook',
	tokenEndpoint: '/auth/facebook',
	oauthProvider: 'facebook',
	oauthEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
	redirectUri: window.location.origin + '/', // FB requires be followed by trailing slash for FB
	requiredUrlParams: ['display', 'scope'],
	scope: ['email'],
	scopeDelimiter: ',',
	display: 'popup',
	oauthType: '2.0',
	popupOptions: { width: 580, height: 400 },
	onLoginSuccess: () => { console.log('Facebook login successful!') }
}

export default class Facebook extends Component {

	render () {
		return (
			<OAuth2 {...this.props} />
		)
	}
}

Facebook.defaultProps = defaultProps
Facebook.propTypes = OAuth2.propTypes
