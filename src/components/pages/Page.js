import React, {Component} from 'react'
import { Grid, Col, Panel } from 'react-bootstrap'

export default class Page extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Grid>
				<Col md={12}>
					<Panel>
						{this.props.children}
					</Panel>
				</Col>
			</Grid>
		)
	}
}