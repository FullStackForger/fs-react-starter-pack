import { connect } from 'react-redux'
import auth from '../components/auth-redux'
import UserAccount from './UserAccount'

const { getProfile, updateProfile, refreshToken } = auth

export default connect(() => ({
    getProfile,
    updateProfile,
    refreshToken,
    token: {
        raw: auth.getToken(),
        payload: auth.getToken(true).payload
    }
}))(UserAccount)