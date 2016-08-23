import { createStore } from 'redux'

import reducers from './reducers'
import middleware from './middleware'

const store = createStore(reducers, middleware)

export default store