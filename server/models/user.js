const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    _id: String,
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password: String,
    gender: String, 
    phoneNumber: String,
    name: String,
    location: String,
    universityName: String
})

const user = mongoose.model("user", UserSchema)
module.exports = user