import React, {Component, PropTypes} from 'react'
import { Grid, Col } from 'react-bootstrap'

export default class Page extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Grid>
				<Col md={12}>
					{this.props.children}
				</Col>
			</Grid>
		)
	}
}

Page.propTypes = {
	header: PropTypes.string
}