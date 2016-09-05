import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import auth from '../auth'

import PageLogin from './component'
import history from '../../config/history'

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleSubmit: loginData => auth
		.login(loginData)
		.then(() => history.push('/'))
		.catch(err => console.error(err)) 					
})

export default connect(false, mapDispatchToProps)(PageLogin)