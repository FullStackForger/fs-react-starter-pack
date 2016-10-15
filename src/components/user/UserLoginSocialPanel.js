import React, {Component, PropTypes} from 'react'
import { Col, Panel } from 'react-bootstrap'
import { Facebook, Google } from 'react-jwt-auth-redux'

const propTypes = {
	title: PropTypes.string,
	onSignInSuccess: PropTypes.func,
	headerStyle: PropTypes.object,
	headerClassName: PropTypes.string,
	bodyClassName: PropTypes.string
}

const defaultProps = {
	title: null,
	onSignInSuccess: () => {},
	facebookClientId: "310178806023492",
	googleClientId: "389760969675-u3h2dgm1v3lqd22u8aloimkgd10i0rvf.apps.googleusercontent.com",
	headerStyle: {
		padding: '10px 5px 10px',
		borderBottom: '1px solid #eee',
		marginBottom: '22px',
		textAlign: 'center',
		fontSize: '1.1em',
		fontWeight: 'bold',
		color: '#ababab'
	}
}

export default class UserLoginSocialPanel extends Component
{

	constructor(props) {
		super(props)
	}

	render () {
		const title = this.props.title
		const onSignInSuccess = this.props.onSignInSuccess
		const headerClassName  = this.props.headerClassName || ''
		const headerStyle = this.props.headerStyle || null
		const facebookClientId = this.props.facebookClientId
		const googleClientId = this.props.googleClientId

		// generate custom header with either this.props.headerClasssName or default panelTiitleStyle
		const headerHtml = !title ? null : (
			<div
				style={headerClassName ? {} : headerStyle}
				className={headerClassName}
			>{title}</div>
		)

		return (
			<Panel><Col xs={10} xsPush={1} sm={12} smPush={0}>
				{headerHtml}
				<div>
					<div className="form-group">
						<Facebook
							className="btn btn-md btn-block"
							clientId={facebookClientId}
							onSignInSuccess={onSignInSuccess}
						/>
						<Google
							className="btn btn-md btn-block"
							clientId={googleClientId}
							onSignInSuccess={onSignInSuccess}
						/>
					</div>
				</div>
			</Col></Panel>
		)
	}
}

UserLoginSocialPanel.propTypes = propTypes
UserLoginSocialPanel.defaultProps = defaultProps