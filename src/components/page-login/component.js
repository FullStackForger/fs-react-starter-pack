import React, { Component, PropTypes } from 'react'

import { Grid, Col, Panel } from 'react-bootstrap'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import { Checkbox, Button, ControlLabel, HelpBlock } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

import { validateEmail, validatePassword } from '../../utils/validators'

const css = {
	signupBlock: { textAlign: 'center', marginTop: '1em' },
	signupSpan: { paddingRight: '0.5em' }
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

	validate(key, value) {
		switch (key) {
			case 'email': return validateEmail(value)
			case 'password': return validatePassword(value)
		}
		return true
	}

	onLoginClick () {
		this.props.handleSubmit({
			email: this.state.email.value,
			password: this.state.password.value
		})
	}

	render() {
		let email = this.state.email
		let password = this.state.password

		return (
			<Grid>
				<Col md={6} mdPush={3}>
					<Panel>
						<Form horizontal>
							<FormGroup controlId="loginEmail"> {/* validationState="success" */ }
								<Col componentClass={ControlLabel} sm={2}>
									<ControlLabel>Email</ControlLabel>
								</Col>
								<Col sm={10}>
									<FormControl type="email" placeholder="Email"
										value={email.value}
										onChange={this.onChange('email')}
									/>
									<FormControl.Feedback />
								</Col>
							</FormGroup>
							<FormGroup controlId="loginPassword">
								<Col componentClass={ControlLabel} sm={2}>
									Password
								</Col>
								<Col sm={10}>
									<FormControl type="password" placeholder="Password"
										value={password.value}
										onChange={this.onChange('password')}
									/>
								</Col>
							</FormGroup>

							<Button bsStyle="primary" bsSize="large" block
								onClick={this.onLoginClick}>
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
		)
	}
}

LoginPage.propTypes = {
	handleSubmit: PropTypes.func.isRequired
}

export default LoginPage