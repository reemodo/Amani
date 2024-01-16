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
module.exports = {filterActivityField}