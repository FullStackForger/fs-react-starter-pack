import React, {Component, PropTypes} from 'react'

import { Grid, Col, Panel } from 'react-bootstrap'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import { FieldGroup, HelpBlock } from 'react-bootstrap'
import { Checkbox, Button, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

const css = {
	signupBlock: { textAlign: 'center', marginTop: '1em' },
	signupSpan: { paddingRight: '0.5em' }
}

class SignupPage extends Component {
	constructor(props) {
		super(props)
		this.onSignupClick = this.onSignupClick.bind(this)
		this.state = {
			username: { value: '', valid: false, error: null },
			email: { value: '', valid: false, error: null },
			password: { value: '', valid: false, error: null },
		}
	}

	onSignupClick () {
		this.props.handleSignup({
			username: this.state.username.value,
			email: this.state.email.value,
			password: this.state.password.value
		})
	}

	render () {
		return (
			<Grid>
				<Col md={6} mdPush={3}>
					<Panel>
						<Form horizontal>

							<FormGroup controlId="signupUserName">
								<Col componentClass={ControlLabel} sm={2}>
									Username
								</Col>
								<Col sm={10}>
									<FormControl type="email" placeholder="Email" />
								</Col>
							</FormGroup>

							<FormGroup controlId="signupEmail">
								<Col componentClass={ControlLabel} sm={2}>
									Email
								</Col>
								<Col sm={10}>
									<FormControl type="email" placeholder="Email" />
								</Col>
							</FormGroup>

							<FormGroup controlId="signupPassword">
								<Col componentClass={ControlLabel} sm={2}>
									Password
								</Col>
								<Col sm={10}>
									<FormControl type="password" placeholder="Password" />
								</Col>
							</FormGroup>

							<FormGroup controlId="signupPasswordConfirmation">
								<Col componentClass={ControlLabel} sm={2}>
									Password
								</Col>
								<Col sm={10}>
									<FormControl type="password" placeholder="Confirm Password" />
								</Col>
							</FormGroup>

							<Button bsStyle="primary" bsSize="large" block onClick={this.onSignupClick}>
								Sign up
							</Button>

							<HelpBlock style={css.signupBlock}>
								<span style={css.signupSpan}>Registered already?</span>
								<Link to="/login">Log in</Link>
							</HelpBlock>
						</Form>
					</Panel>
				</Col>
			</Grid>
		)
	}
}

SignupPage.propTypes = {
	handleSignup: PropTypes.func.isRequired
}

export default SignupPage