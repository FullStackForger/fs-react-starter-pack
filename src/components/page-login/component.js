import React from 'react'

import { Grid, Col, Panel } from 'react-bootstrap'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import { Checkbox, Button, ControlLabel } from 'react-bootstrap'

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

					<Button bsStyle="primary" bsSize="large" block>
						Log in
					</Button>
				</Form>
			</Panel>
		</Col>
	</Grid>
)