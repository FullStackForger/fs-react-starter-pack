import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import auth from '../auth-redux'

import PageSignup from './component'
import history from '../../config/history'

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleSignup: loginData => auth
		.signup(loginData)
		.then(() => history.push('/'))
		.catch(err => console.error(err)) 					
})

export default connect(false, mapDispatchToProps)(PageSignup)