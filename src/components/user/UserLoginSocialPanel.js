import React, {Component, PropTypes} from 'react'
import { Col, Panel } from 'react-bootstrap'
import { Facebook, Google } from 'react-jwt-auth-redux'

export const css = {
	panelTitle: {
		padding: '10px 5px 10px',
		borderBottom: '1px solid #eee',
		marginBottom: '22px',
		textAlign: 'center',
		fontSize: '1.1em',
		fontWeight: 'bold',
		color: '#ababab'
	}
}

const propTypes = {
	title: PropTypes.string,
	onSignInSuccess: PropTypes.func
}

const defaultProps = {
	title: null,
	onSignInSuccess: () => {}
}

export default class UserLoginSocialPanel extends Component
{

	constructor(props){
		super(props)
	}

	render () {
		const title = this.props.title
		const onSignInSuccess = this.props.onSignInSuccess

		return (
			<Panel><Col xs={10} xsPush={1} sm={12} smPush={0}>
				{(() => {
					return title ? <div style={css.panelTitle}>{title}</div> : null
				})()}
				<div className="form-group">
					<Facebook
						className="btn btn-md btn-block"
						clientId="310178806023492"
						onSignInSuccess={onSignInSuccess}
					/>
					<Google
						className="btn btn-md btn-block"
						clientId="389760969675-u3h2dgm1v3lqd22u8aloimkgd10i0rvf.apps.googleusercontent.com"
						onSignInSuccess={onSignInSuccess}
					/>
				</div>
			</Col></Panel>
		)
	}
}

UserLoginSocialPanel.css = css
UserLoginSocialPanel.propTypes = propTypes