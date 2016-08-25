import { connect } from 'react-redux'

import auth from '../auth/auth'

import PageLogin from './component'
import history from '../../config/history'

const mapStateToProps = (state, ownProps) => (state)

const mapDispatchToProps = (dispatch, ownProps) => ({
	onLoginClick: (userData) => dispatch(auth.actions.login({ username: 'dummy' }))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PageLogin)