const consts = require("../config")
const filterActivityField = function(date, transportationType, preferredGender){
    const updateFields = {}
    
        if (date){
            updateFields.date = date
        }
        if (transportationType){
            updateFields.transportationType = transportationType
        }
        if (preferredGender){
            updateFields.preferredGender = preferredGender
        }
        return updateFields
}


const filterAllActivityField = function(userId,transportationType, specificGender, date, activityType, location, universityName){
    const filter = { }
    if(userId){
        filter.userId =  { $ne: userId }
    }
    if(date){
        filter.date = date
    }
    else{
        filter.date = { $gte: consts.currentDate }
    }
    if (transportationType) {
        filter.transportationType = transportationType
    }
    if (activityType) {
        filter.activityType = activityType
    }
    if (universityName) {
        filter.universityName = universityName
    }
    if(location){
        filter.location = location
    }
    if (specificGender) {
        filter.preferredGender = specificGender
    }
    

    return filter
}
module.exports = {filterActivityField, filterAllActivityField}