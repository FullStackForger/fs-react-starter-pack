import React, { Component, PropTypes } from 'react'
import {Grid, Col, Panel} from 'react-bootstrap'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import { Checkbox, Button, ControlLabel, HelpBlock } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

const bioMaxLength = 160
const defaultState = {
	username: '',
	email: '',
	bio: '',
	bioCharsLeft: bioMaxLength
}

const propTypes = {
	getProfile: PropTypes.func.isRequired,
	updateProfile: PropTypes.func.isRequired
}

class AccountPage extends Component {
	constructor(props) {
		super(props)
		this.state = defaultState	
		this.onSubmit = this.onSubmit.bind(this)
	}
	updateState(state) {
		let bio = state.bio || this.state.bio
		let bioCharsLeft = bioMaxLength - bio.length
		this.setState(Object.assign({}, state, {
			bioCharsLeft
		}))
	}
	componentDidMount () {		
		this.props.getProfile()
			.then((data) => this.updateState({
				email: data.email,
				username: data.username,
				bio: data.bio || ''								
			})).catch((err) => console.error(err))
	}

	onChange(field) {				
		return (event) => this.updateState({ 
			[field]: event.target.value,			
		})
	}
	
	onSubmit () {
		this.props.updateProfile({
			bio: this.state.bio
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
								<HelpBlock
									className="pull-right"
								>{this.state.bioCharsLeft}</HelpBlock>
							</FormGroup>

							<Button 
								bsStyle="primary" 
								className="pull-right"
								onClick={this.onSubmit}
							>UpdateInformation</Button>
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

AccountPage.propTypes = propTypes

export default AccountPage