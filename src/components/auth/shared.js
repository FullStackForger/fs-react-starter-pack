import storage from './internals/storage'
import config from './internals/config'

export const setToken = (token) => {
    return storage.set(config.tokenName, token)
}

export const getToken = () => {
    return storage.get(config.tokenName)
}

export const removeToken = () => {
    storage.remove(config.tokenName)
}

export const getAuthHeader = () => {
    let token;
    if (isAuthenticated() && config.authHeader && config.authToken) {
        let token = config.authToken + ' ' + getToken()
        return {[config.authHeader]: token }
    }
    return {}    
}

export const isAuthenticated = () => (!!getToken())