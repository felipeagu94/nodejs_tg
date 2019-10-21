const mongoose = require('mongoose')
const schema = mongoose.Schema
const mySchame = new Schema({
    user: String,
    message: String,
    date: Date
}) 
const model = mongoose.model('message', mySchame)
module.exports = model