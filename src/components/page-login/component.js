import React, { Component, PropTypes } from 'react'

import { Grid, Col, Panel } from 'react-bootstrap'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import { Checkbox, Button, ControlLabel, HelpBlock } from 'react-bootstrap'
import { Link } from 'react-router'

import { Facebook } from '../auth'
import { validateEmail, validatePassword } from '../../utils/validators'

const css = {
	signupBlock: { textAlign: 'center', marginTop: '1em' },
	signupSpan: { paddingRight: '0.5em' }
}

const propTypes = {
	onLoginFormSubmit: PropTypes.func.isRequired
}

class LoginPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email:  { value: '', valid: false, error: null},
			password: { value: '', valid: false, error: null }
		}

		this.onLoginClick = this.onLoginClick.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onLoginSuccess = this.props.onLoginSuccess.bind(this)
	}

	onChange(key) {
		return (event) => {
			let value = event.target.value
			let validated =  this.validate(key, value)
			this.setState({
				[key]: {
					value: value,
					valid: validated.valid,
					error: validated.error
				}
			})
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
		}
		return true
	}

	onLoginClick () {
		this.props.onLoginFormSubmit({
			email: this.state.email.value,
			password: this.state.password.value
		})
	}

	render() {
		let email = this.state.email
		let password = this.state.password
		let formIsReady = email.valid && password.valid

		const tooltip = (msg) => (
  		!!msg ? <Tooltip id="tooltip"><strong>{msg}</strong></Tooltip> : false
		);

		return (
			<Grid>
				<Col md={6} mdPush={3}>
					<Panel>
						<Form horizontal>
							<FormGroup controlId="loginEmail" validationState={this.getValidationState('email')}>
								<Col componentClass={ControlLabel} sm={2}>
									<ControlLabel>
										Email
									</ControlLabel>
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
							<FormGroup controlId="loginPassword" validationState={this.getValidationState('password')}>
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

							<Button bsStyle="primary" bsSize="large" block
								disabled={!formIsReady}
								onClick={this.onLoginClick}>
								Log in
							</Button>
						</Form>
						<HelpBlock style={css.signupBlock}>
								<span style={css.signupSpan}>
									Don't have an account yet?
								</span>
								<Link to="/signup">Sign up</Link>
						</HelpBlock>
					</Panel>
				</Col>
				<Col md={6} mdPush={3}>
					<Panel>
						<Facebook clientId="310178806023492" onLoginSuccess={this.onLoginSuccess} />
					</Panel>
				</Col>
			</Grid>
		)
	}
}

LoginPage.propTypes = propTypes

export default LoginPage