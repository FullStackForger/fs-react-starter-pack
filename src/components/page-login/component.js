import React, { Component, PropTypes } from 'react'

import { Grid, Col, Panel } from 'react-bootstrap'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import { Checkbox, Button, ControlLabel, HelpBlock } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

const css = {
	signupBlock: { textAlign: 'center', marginTop: '1em' },
	signupSpan: { paddingRight: '0.5em' }
}

class LoginPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: null,
			password: null
		}

		this.onLoginClick = this.onLoginClick.bind(this)
	}

	onLoginClick () {
		this.props.handleSubmit({username: 'dummy' })
	}

	render() { return (
		<Grid>
			<Col md={6} mdPush={3}>
				<Panel>
					<Form horizontal>
						<FormGroup controlId="formHorizontalEmail">
							<Col componentClass={ControlLabel} sm={2}>
								Email
							</Col>
							<Col sm={10}>
								<FormControl type="email" placeholder="Email" />
							</Col>
						</FormGroup>

						<FormGroup controlId="formHorizontalPassword">
							<Col componentClass={ControlLabel} sm={2}>
								Password
							</Col>
							<Col sm={10}>
								<FormControl type="password" placeholder="Password" />
							</Col>
						</FormGroup>

						<Button bsStyle="primary" bsSize="large" block onClick={this.onLoginClick}>
							Log in
						</Button>
					</Form>
					<HelpBlock style={css.signupBlock}>
							<span style={css.signupSpan}>Don't have an account yet?</span>
							<Link to="/signup">Sign up</Link>
					</HelpBlock>
				</Panel>
			</Col>
		</Grid>
	)}
}

LoginPage.propTypes = {
	handleSubmit: PropTypes.func.isRequired
}

export default LoginPage