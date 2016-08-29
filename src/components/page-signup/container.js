import { connect } from 'react-redux'

import auth from '../auth/auth'

import PageSignup from './component'
import history from '../../config/history'

const mapDispatchToProps = (dispatch, ownProps) => ({
	onSignupClick (event) {
		event.preventDefault()
		let subscriberId = auth.subscribe((authStore) => {
			if (authStore.authenticated) {
				auth.unsubscribe(subscriberId)
				history.push('/')
			}
		})
		dispatch(auth.actions.signup({username: 'dummy' }))
	}
})

export default connect(false, mapDispatchToProps)(PageSignup)