import React, {Component, PropTypes} from 'react'
import { Col, Panel } from 'react-bootstrap'
import { Facebook, Google } from 'react-jwt-auth-redux'

const propTypes = {
	title: PropTypes.string,
	onSignInSuccess: PropTypes.func,
	clientId: PropTypes.shape({
		facebook: PropTypes.string,
		google: PropTypes.string
	}),
	headerStyle: PropTypes.object,
	panelClassName: PropTypes.string,
	headerClassName: PropTypes.string,
	bodyClassName: PropTypes.string
}

const defaultProps = {
	title: null,
	onSignInSuccess: () => {},
	clientId: {
		facebook: "310178806023492",
		google: "389760969675-u3h2dgm1v3lqd22u8aloimkgd10i0rvf.apps.googleusercontent.com",
	},
	panelClassName: 'panel panel-default',
	titleAsHeader: false,
	bodyClassName: 'panel-body',
	headerClassName: 'panel-heading',
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
		const titleAsHeader = this.props.titleAsHeader
		const onSignInSuccess = this.props.onSignInSuccess
		const panelClassName = this.props.panelClassName || ''
		const headerClassName  = this.props.headerClassName || ''
		const headerStyle = this.props.headerStyle || null
		const bodyClassName = this.props.bodyClassName || ''

		const clientId = this.props.clientId

		// generate custom header with either this.props.headerClasssName or default panelTiitleStyle
		const headerHtml = !title ? null : (
			<div
				className={headerClassName}
				style={titleAsHeader ? {} : headerStyle}
			>{title}</div>
		)

		return (
			<div className={panelClassName}>
				{(() => { if (titleAsHeader) return headerHtml })()}
				<div className={bodyClassName}>
					<Col xs={10} xsPush={1} sm={12} smPush={0}>
						{(() => { if (!titleAsHeader) return headerHtml })()}
						<div className="form-group">
							<Facebook
								className="btn btn-md btn-block"
								clientId={clientId.facebook}
								onSignInSuccess={onSignInSuccess}
							/>
							<Google
								className="btn btn-md btn-block"
								clientId={clientId.google}
								onSignInSuccess={onSignInSuccess}
							/>
						</div>
					</Col>
				</div>
			</div>
		)
	}
}

UserLoginSocialPanel.propTypes = propTypes
UserLoginSocialPanel.defaultProps = defaultProps