import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import authReducer from '../components/auth/reducer'

const reducers = combineReducers({
	routing: routerReducer,
	auth: authReducer
})

export default reducers