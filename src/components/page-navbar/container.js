import {connect} from 'react-redux'
import PageNavbar from './component'
import auth from '../auth/auth'

const mapStateToProps = (state) => {
	return {	
		authenticated: auth.isAuthenticated()
	}
}

export default connect(
	mapStateToProps
)(PageNavbar)