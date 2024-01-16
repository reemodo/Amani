const mongoose = require('mongoose')
const Schema = mongoose.Schema

const universitySchema = new Schema({
    name: String,
    emailSuffix: String
})

const university = mongoose.model("university", universitySchema)
module.exports = university