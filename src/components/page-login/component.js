import React from 'react'

import { Grid, Col, Panel } from 'react-bootstrap'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import { Checkbox, Button, ControlLabel, HelpBlock } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

const css = {
	signupBlock: { textAlign: 'center', marginTop: '1em' },
	signupSpan: { paddingRight: '0.5em' }
}

//todo: move it to container perhaps
import auth from '../../utils/auth'
import history from '../../config/history'
const onLoginClick = () => {
	auth.login({ username: 'dummy' })
	history.push('/account')
}

export default () => (
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

					<Button bsStyle="primary" bsSize="large" block onClick={onLoginClick}>
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