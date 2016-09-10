import React, { Component } from 'react'
import {Grid, Col, Panel} from 'react-bootstrap'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import { Checkbox, Button, ControlLabel, HelpBlock } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

const defaultState = {
	username: '',
	email: '',
	bio: ''
}

class AccountPage extends Component {
	constructor(props) {
		super(props)
		this.state = defaultState	
	}

	componentDidMount () {		
		this.props.getProfile()
			.then((data) => this.setState(data))
			.catch((err) => console.error(err))
	}

	onChange(field) {
		return (event) => this.setState({
			[field]: event.target.value
		})
	}
	
	render() {
		return (
			<Grid>
				<Col md={6}>
					<Panel header="Account details"><Col xs={12}>
						<Form horizontal>

							<FormGroup controlId="profileUsername">
								<ControlLabel>Username</ControlLabel>
								<FormControl
									disabled
									type="text" 
									placeholder="Username" 
									value={this.state.username}
									onChange={this.onChange('username')}
								/>
							</FormGroup>

							<FormGroup controlId="profileEmail">
								<ControlLabel>Email</ControlLabel>
								<FormControl
									disabled 
									type="email" 
									placeholder="Email"
									value={this.state.email}
									onChange={this.onChange('email')} 
								/>
							</FormGroup>

							<FormGroup controlId="profileBio">
								<ControlLabel>Bio</ControlLabel>
								<FormControl 
									componentClass="textarea" 
									placeholder="Bio"
									value={this.state.bio}
									onChange={this.onChange('bio')} 
								/>
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
	}
}

export default AccountPage