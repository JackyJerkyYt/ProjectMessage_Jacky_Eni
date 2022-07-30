const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema({
    user: {type: String, required: true},
    text: {type: String, required: true}
})

const message = mongoose.model("message", messageSchema)

module.exports = message