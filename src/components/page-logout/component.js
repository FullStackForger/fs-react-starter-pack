import React, { PropTypes } from 'react'
import { Grid, Col, Panel, HelpBlock } from 'react-bootstrap'
import { Link } from 'react-router'

class LogoutPage extends React.Component {

	constructor(props) {
		super(props)
		this.timer = null
		this.state = {
			timeout: this.props.timeout
		}
		this.onTimout = this.props.onTimeout
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			let timeout = this.state.timeout - 1
			if (timeout <= 0) {
				this.clearTimer()
				this.onTimout()
				return
			}
			this.setState({
				timeout: timeout
			})
		}, 1000)
	}

	componentWillUnmount() {
		if (this.timer != null) {
			this.clearTimer()
		}
	}

	clearTimer() {
		clearInterval(this.timer)
		this.timer = null
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
