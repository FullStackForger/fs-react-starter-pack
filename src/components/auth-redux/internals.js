import auth from '../auth'
export { auth } 

const internals = {
	store: null
}

export const init = ({store}) => {
	internals.store = store
}

export const dispatch = function (type, payload, error) {
	internals.store.dispatch({
		type,
		payload,
		error
	})
}