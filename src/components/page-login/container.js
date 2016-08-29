import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import auth from '../auth/auth'

import PageLogin from './component'
import history from '../../config/history'

const mapDispatchToProps = (dispatch, ownProps) => ({
	//dispatchLoginAction: dispatch(auth.actions.login({ username: 'dummy' }))
	onLoginClick (event) {
		event.preventDefault()
		let subscriberId = auth.subscribe((authStore) => {
			if (authStore.authenticated) {
				auth.unsubscribe(subscriberId)
				history.push('/')
			}
		})
		dispatch(auth.actions.login({username: 'dummy' }))
	}
})

export default connect(false, mapDispatchToProps)(PageLogin)