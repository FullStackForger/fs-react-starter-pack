import React from 'react'

import { Grid, Col, Panel } from 'react-bootstrap'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import { FieldGroup } from 'react-bootstrap'
import { Checkbox, Button, ControlLabel } from 'react-bootstrap'

export default () => (
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

					<Button bsStyle="primary" bsSize="large" block>
						Sign up
					</Button>
				</Form>
			</Panel>
		</Col>
	</Grid>
)