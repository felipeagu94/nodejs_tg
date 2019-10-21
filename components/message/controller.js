const store = require('./store')

const AddMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        if(!user || !message ) return reject('missing information')
        const fullMessage = {
            user: user,
            message: message,
            date: new Date() 
        }
        store.add(fullMessage)
        resolve(fullMessage)
    })
}
const getMessage = () => {
    return new Promise((resolve, reject) => resolve(store.list()))
}

module.exports = {
    AddMessage,
    getMessage
}