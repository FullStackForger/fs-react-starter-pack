import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { authReducer } from 'react-jwt-auth-redux'

const reducers = combineReducers({
	routing: routerReducer,
	auth: authReducer
})

export default reducers