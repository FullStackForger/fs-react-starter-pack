import React, {Component, PropTypes} from 'react'
import core from './core'

class Auth extends Component {
	constructor (props) {
		super(props)
		core.init(props)
	}

	render() {
		return this.props.children
	}
}

Auth.propTypes = {
	store: PropTypes.object.isRequired,
	tokenName: PropTypes.string
}

export default Auth