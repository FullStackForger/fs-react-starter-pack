import { connect } from 'react-redux'
import { history } from '../../config/store'
import PageLogout from './UserLogout'
import auth from 'react-jwt-auth-redux'

const mapStateToProps = (state, ownProps) => ({
	timeout: 3,
	redirect: () => history.push('/'),
	logout: auth.logout
})

export default connect(
	mapStateToProps
)(PageLogout)