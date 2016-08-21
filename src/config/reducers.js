import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import navbarReducer from '../components/page-navbar/reducer'

const reducers = combineReducers({
	routing: routerReducer,
	navbar: navbarReducer
})

export default reducers