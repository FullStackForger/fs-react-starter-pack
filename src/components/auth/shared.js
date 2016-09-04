import storage from './internals/storage'
import config from './internals/config'

export const setToken = (token) => {
    storage.set(config.tokenName, token)
}

export const getToken = () => {
    return storage.get(config.tokenName)
}

export const removeToken = () => {
    storage.remove(config.tokenName)
}

export const isAuthenticated = () => (!!getToken())