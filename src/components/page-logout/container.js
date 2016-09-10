import { connect } from 'react-redux'
import history from '../../config/history'
import PageLogout from './component'
import auth from '../auth-redux'

const mapStateToProps = (state, ownProps) => ({
	timeout: 3,
	redirect: () => history.push('/'),
	logout: auth.logout
})

export default connect(
	mapStateToProps	
)(PageLogout)