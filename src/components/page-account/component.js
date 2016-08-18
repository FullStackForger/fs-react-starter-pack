import React from 'react'
import {Grid, Col, Panel} from 'react-bootstrap'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import { Checkbox, Button, ControlLabel, HelpBlock } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

export default ()=>(
	<Grid>
		<Col md={6}>
			<Panel header="Account details"><Col xs={12}>
				<Form horizontal>

					<FormGroup controlId="profileUsername">
						<ControlLabel>Username</ControlLabel>
						<FormControl type="email" placeholder="Username" />
					</FormGroup>

					<FormGroup controlId="profileEmail">
						<ControlLabel>Email</ControlLabel>
						<FormControl type="email" placeholder="Email" />
					</FormGroup>

					<FormGroup controlId="profileBio">
						<ControlLabel>Bio</ControlLabel>
						<FormControl componentClass="textarea" placeholder="Bio" />
					</FormGroup>

					<Button bsStyle="primary" className="pull-right">UpdateInformation</Button>
				</Form>
			</Col></Panel>
		</Col>

		<Col md={6}>
			<Panel header="Social accounts"><Col sm={8} smOffset={2}>
				<Form horizontal>

					<Button block>Facebook</Button>
					<Button block>Google +</Button>
				</Form>
			</Col></Panel>
		</Col>
	</Grid>
)