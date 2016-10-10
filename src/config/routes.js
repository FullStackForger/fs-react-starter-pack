import Layout from '../components/layout'
import Account from '../user/UserAccountContainer'
import Home from '../pages/Home'
import Info from '../pages/Info'
import Login from '../user/UserLoginContainer'
import Logout from '../user/UserLogoutContainer'
import Signup from '../components/page-signup/container'

import auth from '../components/auth'

const loginCheck = (nextState, replace, authState, redirectPath) => {
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