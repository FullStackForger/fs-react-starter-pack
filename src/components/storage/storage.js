const cache = {}

export default class Storage {
	constructor(opts = {}) {
		Object.keys(opts).forEach((key) =>  {
			this[key] = opts.hasOwnProperty(key)
				? opts[key]
				: Storage.defaults[key]
		})
	}
}

Storage.defaults = {
	storage: localStorage, // localStorage, sessionStorage or custom conforming to storage API
}

Storage.create = (opts) => (new Storage(opts))

Storage.cache = cache

Storage.prototype.cache = cache

Storage.prototype.get = function (key) {
	try {
			return storage.getItem(key)
		} catch (e) {
			return this.cache[key]
		}
}

Storage.prototype.set = function (key, value) {
		try {
			return storage.setItem(key, value)
		} catch (e) {
			this.cache[key] = value
		}
}

Storage.prototype.remove = function (key) {
		try {
			storage.removeItem(key)
		} catch (e) {
			delete this.cache[key]
		}
}