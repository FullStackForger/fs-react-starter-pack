import { connect } from 'react-redux'
import auth from '../auth-redux'
import AccountPage from './component'

const { getProfile } = auth
 
export default connect(() => ({
    getProfile    
}))(AccountPage)