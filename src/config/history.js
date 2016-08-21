import { browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'

const history = syncHistoryWithStore(hashHistory, store)

history.listen(location => {
	//analyticsService.track(location.pathname)
	console.log(JSON.stringify(location))
})

export default history