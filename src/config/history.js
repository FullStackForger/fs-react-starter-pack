import { browserHistory, hashHistory, createMemoryHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'
import { isServer } from './env'

const history = isServer
	? syncHistoryWithStore(browserHistory, store)
	: createMemoryHistory()

history.listen(location => {
	//analyticsService.track(location.pathname)
	console.log(JSON.stringify(location))
})

export default history