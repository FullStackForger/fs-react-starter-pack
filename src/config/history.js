import { browserHistory, hashHistory, createMemoryHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'
import { isBrowser } from './env'

const history = isBrowser
	? syncHistoryWithStore(browserHistory, store)
	: createMemoryHistory()

history.listen(location => {
	//analyticsService.track(location.pathname)
	console.log(JSON.stringify(location))
})

export default history