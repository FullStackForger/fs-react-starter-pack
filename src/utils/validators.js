
export const validateEmail = function(email) {
	let error = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
		? 'Ivalid email format'
		: null

	return {
		valid: error === null,
		error: error
	}
}

export const validateUsername = function(password) {
	let error = null
	let length = /^(.*){6,}$/
	if (!length.test(password)) error = 'Password should have at least 6 characters'
	return {
		valid: error === null,
		error: error
	}
}

export const validatePassword = function(password) {
	let error = null
	let length = /^(.*){8,}$/
	if (!length.test(password)) error = 'Password should have at least 8 characters'
	let specials = /^(.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*)$/
	if (!specials.test(password)) error = 'Password should have at least one special character'
	let letters = /^(.*[a-zA-Z].*)$/
	if (!letters.test(password)) error = 'Password should have at least one letter'
	let digits = /^(.*[0-9].*)$/
	if (!digits.test(password)) error = 'Password should have at least one digit'
	return {
		valid: error === null,
		error: error
	}
}

export const validatePassword2 = function(passwordConfirmation, password) {
	let validation = validatePassword(passwordConfirmation)
	let error = validation.error
	if (passwordConfirmation != password) error = 'Confirmation doesn\'t match password'
	return {
		valid: error === null,
		error: error
	}
}