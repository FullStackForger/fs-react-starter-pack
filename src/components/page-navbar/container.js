import {connect} from 'react-redux'
import PageNavbar from './component'

const mapStateToProps = (state) => ({
	authenticated: state.authenticated
})

export default connect(
	mapStateToProps
)(PageNavbar)