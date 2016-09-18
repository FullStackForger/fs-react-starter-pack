import React, {Component, PropTypes} from 'react'

import { Grid, Col, Panel } from 'react-bootstrap'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import { FieldGroup, HelpBlock } from 'react-bootstrap'
import { Checkbox, Button, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

import { validateEmail, validateUsername } from '../../utils/validators'
import { validatePassword, validatePassword2 } from '../../utils/validators'

const css = {
	signupBlock: { textAlign: 'center', marginTop: '1em' },
	signupSpan: { paddingRight: '0.5em' },
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

class SignupPage extends Component {
	constructor(props) {
		super(props)
		this.onSignupClick = this.onSignupClick.bind(this)
		this.onChange = this.onChange.bind(this)
		this.state = {
			username: { value: '', valid: false, error: null },
			email: { value: '', valid: false, error: null },
			password: { value: '', valid: false, error: null },
			password2: { value: '', valid: false, error: null },
		}
	}

	isFormReady() {
		return this.state.username.valid
			&& this.state.email.valid
			&& this.state.password.valid
			&& this.state.password2.valid
	}

	onSignupClick () {
		this.props.handleSignup({
			username: this.state.username.value,
			email: this.state.email.value,
			password: this.state.password.value
		})
	}

	onChange(key) {
		return (event) => {
			let value = event.target.value
			let valid, error
			({valid, error} = this.validate(key, value))
			let state = {}
			state[key] = {
				value: value,
				valid: valid,
				error: error
			}
			this.setState(state)
		}
	}

	getValidationState(key) {
		if (!this.state[key].value) return
		return this.state[key].valid
			? 'success'
			: 'error'
	}

	validate(key, value) {
		switch (key) {
			case 'email': return validateEmail(value)
			case 'password': return validatePassword(value)
			case 'password2': return validatePassword2(value, this.state.password.value)
			case 'username': return validateUsername(value)
		}
		return true
	}

	render () {
		let email = this.state.email
		let username = this.state.username
		let password = this.state.password
		let password2 = this.state.password2

		return (
			<Grid>
				<Col md={8}>
					<Panel><Col xs={10} xsPush={1}>
						<div style={css.panelTitle}>Register account</div>
						<Form horizontal>

							<FormGroup controlId="signupUsername" validationState={this.getValidationState('username')}>
								<Col componentClass={ControlLabel} sm={2}>
									Username
								</Col>
								<Col sm={10}>
									<FormControl type="text" placeholder="Username"
										value={username.value}
										onChange={this.onChange('username')}
									/>
									<FormControl.Feedback />
									<HelpBlock>
										{username.error}
									</HelpBlock>
								</Col>
							</FormGroup>

							<FormGroup controlId="signupEmail"  validationState={this.getValidationState('email')}>
								<Col componentClass={ControlLabel} sm={2}>
									Email
								</Col>
								<Col sm={10}>
									<FormControl type="email" placeholder="Email"
										value={email.value}
										onChange={this.onChange('email')}
									/>
									<FormControl.Feedback />
									<HelpBlock>
										{email.error}
									</HelpBlock>
								</Col>
							</FormGroup>

							<FormGroup controlId="signupPassword" validationState={this.getValidationState('password')}>
								<Col componentClass={ControlLabel} sm={2}>
									Password
								</Col>
								<Col sm={10}>
									<FormControl type="password" placeholder="Password"
										value={password.value}
										onChange={this.onChange('password')}
									/>
									<FormControl.Feedback />
									<HelpBlock>
										{password.error}
									</HelpBlock>
								</Col>
							</FormGroup>

							<FormGroup controlId="signupPassword2" validationState={this.getValidationState('password2')}>
								<Col componentClass={ControlLabel} sm={2}>
									Password
								</Col>
								<Col sm={10}>
									<FormControl type="password" placeholder="Confirm Password"
										value={password2.value}
										onChange={this.onChange('password2')}
									/>
									<FormControl.Feedback />
									<HelpBlock>
										{password2.error}
									</HelpBlock>
								</Col>
							</FormGroup>

							<Button bsStyle="primary" bsSize="medium" block
								onClick={this.onSignupClick}
								disabled={!this.isFormReady()}
							>
								Sign up
							</Button>

							<HelpBlock style={css.signupBlock}>
								<span style={css.signupSpan}>Registered already?</span>
								<Link to="/login">Log in</Link>
							</HelpBlock>
						</Form>
					</Col></Panel>
				</Col>
			</Grid>
		)
	}
}

SignupPage.propTypes = {
	handleSignup: PropTypes.func.isRequired
}

export default SignupPage