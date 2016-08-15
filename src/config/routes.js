import Layout from '../components/layout'
import Account from '../components/page-account/component'
import Home from '../components/page-home/component'
import Info from '../components/page-info/component'
import Login from '../components/page-login/component'
import Profile from '../components/page-profile/component'
import Logout from '../components/page-logout/component'
import Signup from '../components/page-signup/component'

const routes = {
  path: '/',
  component: Layout,
  indexRoute: { component:  Layout },
  childRoutes: [
		{ path: '/home', component: Home },
		{ path: '/info', component: Info },
		{ path: '/login', component: Login },
		{ path: '/signup', component: Signup },
		{ path: '/logout', component: Logout },
		{ path: '/account', component: Account },
		{ path: '/profile', component: Profile }
	]
}

export default routes