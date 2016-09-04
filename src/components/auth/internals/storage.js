import Storage from '../../storage/storage'

export default new Storage({
    storage: (window.localStorage) ? localStorage : null
})