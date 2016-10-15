import React, { Component, PropTypes } from 'react'
import {Grid, Col, Panel} from 'react-bootstrap'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import { Checkbox, Button, ControlLabel, HelpBlock } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import SocialLoginPanel from './UserLoginSocialPanel'

import defaultPicture from './img/avatar.png'

const bioMaxLength = 160
const defaultState = {
	displayName: '',
	email: '',
	bio: '',
	bioCharsLeft: bioMaxLength
}

const propTypes = {
	getProfile: PropTypes.func.isRequired,
	updateProfile: PropTypes.func.isRequired,
	refreshToken: PropTypes.func.isRequired,
	token: PropTypes.shape({
		payload: PropTypes.object.isRequired,
		raw: PropTypes.string.isRequired
	})
}

class AccountPage extends Component {
	constructor(props) {
		super(props)
		this.state = defaultState
		this.onSubmit = this.onSubmit.bind(this)
		this.onRefresh = this.onRefresh.bind(this)
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
				displayName: data.displayName,
				picture: data.picture,
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

	onRefresh () {
		this.props.refreshToken()
	}

	render() {
		let exp = new Date(this.props.token.payload.exp * 1000)
		let tokenExpiryDate = exp.toUTCString()

		return (
			<Grid>
				<Col md={6}>
					<Panel header="Account details">
						<Form horizontal>
							<Col xs={12} sm={4}>
								<FormGroup controlId="profileImage">
									<ControlLabel>Avatar</ControlLabel>
									<div>
										<img
											style={{width: '95%'}}
											src={this.state.picture || defaultPicture}
										/>
									</div>
								</FormGroup>
							</Col>

							<Col xs={12} sm={8}>
								<FormGroup controlId="profileUsername">
									<ControlLabel>Name</ControlLabel>
									<FormControl
										disabled
										type="text"
										placeholder="Display name"
										value={this.state.displayName}
										onChange={this.onChange('displayName')}
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
							</Col>

							<Col xs={12}>
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

							</Col>
						</Form>
					</Panel>
				</Col>

				<Col md={6}>
					<SocialLoginPanel headerClassName="panel-heading" title="Link social accounts"/>
				</Col>

				<Col md={6}>
					<div className="panel panel-default">
						<div className="panel-heading">
							Authentication token
							<Button className="btn-xs pull-right" onClick={this.onRefresh}>
								<span className="glyphicon glyphicon-refresh"></span>
							</Button>
						</div>
						<div className="panel-body">
							<HelpBlock>
								expires:<br />
								<strong>{tokenExpiryDate}</strong>
							</HelpBlock>
							<pre style={{fontSize: 9}}>
								{this.props.token.raw}
							</pre>
						</div>
					</div>
				</Col>
			</Grid>
		)
	}
}

AccountPage.propTypes = propTypes

export default AccountPage