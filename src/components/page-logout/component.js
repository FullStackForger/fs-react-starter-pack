import React, { PropTypes } from 'react'
import { Grid, Col, Panel, HelpBlock } from 'react-bootstrap'
import { Link } from 'react-router'

class LogoutPage extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			timeout: 3
		}
	}

	componentDidMount() {
		let timer = setInterval(() => {
			let timeout = this.state.timeout - 1
			if (timeout < 0) {
				clearTimeout(timer)
				return
			}
			this.setState({
				timeout: timeout
			})
		}, 1000)
	}

	render() {
		return (
			<Grid>
				<Col md={6} mdPush={3}>
					<Panel>
						<HelpBlock style={{textAlign: 'center'}}>
							<p><strong>You have been logged out.</strong></p>
							<p>Redirecting to home page... in {this.state.timeout}s</p>
						</HelpBlock>
					</Panel>

				</Col>
			</Grid>
		)
	}
}

export default LogoutPage
