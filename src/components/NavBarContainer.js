import {connect} from 'react-redux'
import NavBar from './NavBar'
import auth from '../components/auth'

const mapStateToProps = (state) => {
	return {
		authenticated: auth.isAuthenticated()
	}
}

export default connect(
	mapStateToProps
)(NavBar)