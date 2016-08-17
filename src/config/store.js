import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
	dummy: (state = {}, action) => (state),
	routing: routerReducer
})

const store = createStore(reducers)

export default store