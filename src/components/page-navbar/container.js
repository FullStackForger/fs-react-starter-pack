import {connect} from 'react-redux'
import PageNavbar from './component'
import auth from '../auth/auth'

const mapStateToProps = (state) => ({
		// updateds navbar state based on auth state
		authenticated: state.auth.authenticated
})

export default connect(
	mapStateToProps
)(PageNavbar)