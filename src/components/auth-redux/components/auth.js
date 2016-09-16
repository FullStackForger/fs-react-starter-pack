import React, {Component, PropTypes} from 'react'
import { auth, init } from '../internals'

const Auth = auth.Auth

export default class AuthRedux extends Component {
	constructor (props) {
		const {store} = props
		init({store})
		super(props)
	}

	render() {
		return <Auth {...this.props}>{this.props.children}</Auth>
	}
}

AuthRedux.propTypes = {
	store: PropTypes.object.isRequired
}