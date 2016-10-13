import Layout from '../components/Layout'
import Account from '../components/user/UserAccountContainer'
import Home from '../components/pages/Home'
import Info from '../components/pages/Info'
import Login from '../components/user/UserLoginContainer'
import Logout from '../components/user/UserLogoutContainer'
import Signup from '../components/user/UserSignupContainer'

import auth from 'react-jwt-auth-redux'

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