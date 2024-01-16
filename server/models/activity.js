const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ActivitySchema = new Schema({
    userId: String, 
    universityName: String,
    date: Date,
    location: String,
    transportationType: String,
    capacity: Number,
    activityType: String,
    preferredGender: String,
    participants: [String]  
})

const activity = mongoose.model("activity", ActivitySchema)
module.exports = activity