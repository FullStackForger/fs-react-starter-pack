import Layout from '../components/layout'
import Account from '../components/page-account/component'
import Home from '../components/page-home/component'
import Info from '../components/page-info/component'
import Login from '../components/page-login/container'
import Logout from '../components/page-logout/container'
import Signup from '../components/page-signup/component'

import auth from '../components/auth/auth'

const loginCheck = (nextState, replace, authState, redirectPath) => {
	console.log(auth.isAuthenticated(), authState)
	if (auth.isAuthenticated() !== authState) replace(redirectPath)
}

const routes = {
  path: '/',
  component: Layout,
  indexRoute: { component:  Home },
  childRoutes: [
		{ path: '/home', component: Home },
		{ path: '/info', component: Info },
		{ path: '/login', component: Login, onEnter: (nextState, replace) => loginCheck(nextState, replace, false, '/') },
		{ path: '/signup', component: Signup, onEnter: (nextState, replace) => loginCheck(nextState, replace, false, '/')  },
		{ path: '/logout', component: Logout, onEnter: (nextState, replace) => loginCheck(nextState, replace, true, '/')  },
		{ path: '/account', component: Account, onEnter: (nextState, replace) => loginCheck(nextState, replace, true, '/login')  }
	]
}

export default routes