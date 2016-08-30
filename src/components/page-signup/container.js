import { connect } from 'react-redux'

import auth from '../auth/auth'

import PageSignup from './component'
import history from '../../config/history'

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleSignup (userData) {
		let subscriberId = auth.subscribe((authStore) => {
			if (authStore.authenticated) {
				auth.unsubscribe(subscriberId)
				history.push('/')
			}
		})
		dispatch(auth.actions.signup(userData))
	}
})

export default connect(false, mapDispatchToProps)(PageSignup)