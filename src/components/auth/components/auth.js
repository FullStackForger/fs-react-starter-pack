import React, {Component, PropTypes} from 'react'
import config from '../internals/config'

export default class Auth extends Component {
	constructor (props) {
		super(props)
		config.assign(props)
	}

	render() {
		return this.props.children
	}
}