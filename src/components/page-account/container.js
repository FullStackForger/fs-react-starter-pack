import { connect } from 'react-redux'
import auth from '../auth-redux'
import AccountPage from './component'

const { getProfile, updateProfile, refreshToken } = auth
 
export default connect(() => ({
    getProfile,
    updateProfile,
    refreshToken,
    token: auth.getToken(true)
}))(AccountPage)