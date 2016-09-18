import React from 'react'
import { Col, Panel } from 'react-bootstrap'
import { Facebook } from './auth'

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

export const SocialLoginTitle = ({title}) => (
	<div style={css.panelTitle}>{title}</div>
)

SocialLoginTitle.css = css.panelTitle

const SocialLoginPanel = ({
	title,
	onLoginSuccess
}) => (
	<Panel><Col xs={10} xsPush={1}>
		<SocialLoginTitle title={title} />
		<div className="form-group">
			<Facebook
				className="btn btn-md btn-block"
				clientId="310178806023492"
				onLoginSuccess={onLoginSuccess}
			/>
		</div>
	</Col></Panel>
)
export default SocialLoginPanel