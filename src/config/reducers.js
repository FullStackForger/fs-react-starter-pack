import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import authReducer from '../components/auth/reducer'
import navbarReducer from '../components/page-navbar/reducer'

const reducers = combineReducers({
	routing: routerReducer,
	navbar: navbarReducer,
	auth: authReducer
})

export default reducers