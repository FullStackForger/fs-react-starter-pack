// Storage Component for React
// ------------------------------------------------------------------
// It stores data in `localStorage`, `sessionStorage` or caches it
// Additionally it makes data available between different components
//
// Inspired by:
//  - https://github.com/yuanyan/react-storage
//  - https://github.com/sahat/satellizer/blob/master/src/storage.ts
// ------------------------------------------------------------------

import React, { PropTypes } from 'react'

export default class Storage extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillUpdate() {
		if(this.props.autoSave) {
			this.save();
		}
	}

  save() {
		var value = this.props.useRaw
			? this.props.value
			: JSON.stringify(this.props.value);

		Storage.set(this.props.name, value);
	}

	render() {
		return `[property value for ${this.props.name}]`
	}
}

Storage.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
		PropTypes.array
	]),
	useRaw: PropTypes.bool,
	autoSave: PropTypes.bool,
	storage: PropTypes.object
},

Storage.defaultProps = Storage.prototype.defaults

Storage.prototype.defaults = {
	storage: localStorage,		// localStorage, sessionStorage or custom
	autoSave: true,
	userRaw: true
}

Storage.prototype.cache = {}

Storage.prototype.get = function (key) {
  try {
      return window[this.props.storageType].getItem(key)
    } catch (e) {
      return this.props.cache[key]
    }
}

Storage.prototype.set = function (key, value) {
    try {
       return window[this.props.storageType].setItem(key, value)
    } catch (e) {
      memoryStore[key] = value
    }
}

Storage.prototype.remove = function (key) {
		try {
     window[this.props.storageType].removeItem(key)
    } catch (e) {
      delete memoryStore[key]
    }
}