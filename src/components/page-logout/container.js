import { connect } from 'react-redux'
import history from '../../config/history'
import PageLogout from './component'
import auth from '../auth'

const mapStateToProps = (state, ownProps) => ({
	timeout: 3,
	onTimeout: () => history.push('/')
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onLogout: auth.logout
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PageLogout)