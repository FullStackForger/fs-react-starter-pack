import { applyMiddleware } from 'redux'

import authMiddleware from '../components/auth/middleware'

export default applyMiddleware(
	authMiddleware
)