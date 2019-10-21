const mongoose = require('mongoose')
// mongodb+srv://db_user:ShfZGKCsrWwoZFq7@jagudelo-bwkiz.mongodb.net/test
mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://db_user:ShfZGKCsrWwoZFq7@jagudelo-bwkiz.mongodb.net/test', {
    useNewUrlParser: true
})
const list = []

const addMessage = (msg) => list.push(msg)
const getMessages = () => list

module.exports = {
    add: addMessage,
    list: getMessages
}