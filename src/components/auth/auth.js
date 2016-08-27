import core from './core'
import * as actions from './actions'

import Auth from './component'
export {Auth}

export default {
	actions: actions,
	isAuthenticated: core.isAuthenticated,
	subscribe: core.subscribe,
	unsubscribe: core.unsubscribe,
	init: core.init
}