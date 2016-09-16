import React, { PropTypes } from 'react'
import { parseQueryString } from '../internals/utils'

const propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	popupUrl: PropTypes.string,
	redirectUri: PropTypes.string,
	onClose: PropTypes.func
}

const defaultProps = {
	width: 500,
	height: 500,
	polling: true
}

class Popup extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidUpdate() {
		if (this.props.open) {
			this.open()
		}
	}

	open() {
		let { height, width } = this.props
		let options = {
			width: width,
			height: height,
			top: window.screenY + ((window.outerHeight - height) / 2.5),
			left: window.screenX + ((window.outerWidth - width) / 2),
			resizable: 0, // IE only
			scrollbars: 0 // IE, Firefox & Opera only
		}

		const popup = window.open(this.props.popupUrl, '_blank', Popup.generateSpec(options))

		if (this.props.popupUrl === 'about:blank') {
			popup.document.body.innerHTML = 'Loading...'
		}

		if (this.props.polling) {
			this.pollPopup(popup)
		}
	}

	pollPopup(window) {
		let redirectUriPath = document.location.hostname + document.location.pathname

		// if (requestToken) {
		//   window.location = config.authorizationUrl + '?' + qs.stringify(requestToken)
		// }

		let polling = setInterval(() => {
			if (!window || window.closed) {
				clearInterval(polling)
				this.props.onClose()
			}
			try {
				const popupUrlPath = window.location.host + window.location.pathname

				if (popupUrlPath === redirectUriPath) {
					if (window.location.search || window.location.hash) {
						const query = parseQueryString(window.location.search.substring(1).replace(/\/$/, ''))
						const hash = parseQueryString(window.location.hash.substring(1).replace(/[\/$]/, ''))
						const params = Object.assign({}, query, hash)

						if (params.error) {
							console.error(params.error)
						} else {
							console.log(params)
						}
					} else {
						console.info('OAuth redirect has occurred but no query or hash parameters were found.')
					}
				}
			} catch (error) {
				// Ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.
				// A hack to get around same-origin security policy errors in Internet Explorer.
			}
		}, 250)
	}

	render() {
		console.log('popup open?', this.props.open)
		return null
	}
}

Popup.generateSpec = (options) => {
	return Object.keys(options).reduce((previous, current, index) => {
		let final = index == 1 ? previous + '=' + options[previous] : previous
		return final + ',' + current + '=' + options[current]
	})
}

Popup.defaultProps = defaultProps
Popup.propTypes = propTypes

export default Popup