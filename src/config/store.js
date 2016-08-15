import {createStore, combineReducers} from 'redux'

const reducers = combineReducers({
	dummy: (state = {}, action) => (state)
})
const store = createStore(reducers)

export default store