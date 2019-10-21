const mongoose = require('mongoose')
// mongodb+srv://db_user:ShfZGKCsrWwoZFq7@jagudelo-bwkiz.mongodb.net/test?retryWrites=true&w=majority
mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://db_user:ShfZGKCsrWwoZFq7@jagudelo-bwkiz.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
console.log('established connection')
const list = []

const addMessage = (msg) => list.push(msg)
const getMessages = () => list

module.exports = {
    add: addMessage,
    list: getMessages
}