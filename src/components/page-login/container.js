import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import auth from '../auth-redux'

import PageLogin from './component'
import history from '../../config/history'

const mapDispatchToProps = (dispatch, ownProps) => ({
	onLoginFormSubmit: loginData => auth
		.login(loginData)
		.then(() => history.push('/'))
		.catch(err => console.error(err)),
	onLoginSuccess: () => history.push('/')
})

export default connect(false, mapDispatchToProps)(PageLogin)