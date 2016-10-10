import auth from './inernals'
import AUTH from './constants'

const FacebookBase = auth.Facebook
export class Facebook extends FacebookBase {
	constructor(props) {
		super(props)
	}

	onSignup () {

	}

	onSignupSuccess() {

	}

	onSignupFailed() {

	}
}
Facebook.defaultProps = FacebookBase.defaultProps
Facebook.propTypes = FacebookBase.propTypes