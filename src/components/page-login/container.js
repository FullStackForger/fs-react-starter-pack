import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import auth from '../auth/auth'

import PageLogin from './component'
import history from '../../config/history'

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleSubmit (loginData) {
		let subscriberId = auth.subscribe((authStore) => {
			if (authStore.authenticated) {
				auth.unsubscribe(subscriberId)
				history.push('/')
			}
		})
		dispatch(auth.actions.login(loginData))
	}
})

export default connect(false, mapDispatchToProps)(PageLogin)