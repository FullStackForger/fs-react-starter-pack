import { connect } from 'react-redux'
import history from '../../config/history'
import PageLogout from './component'

const logout = () => {
	console.log('test')
	history.push('/')
}

const mapStateToProps = (state, ownProps) => ({
	timeout: 3,
	onTimeout: logout
})
const mapDispatchToProps = (dispatch, ownProps) => ({})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PageLogout)