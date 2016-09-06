import React, {Component, PropTypes} from 'react'
import { auth, init } from './internals'

const Auth = auth.component

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

Auth.propTypes = {
	store: PropTypes.object.isRequired
}