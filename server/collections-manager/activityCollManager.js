const Activity = require('../models/activity')
const utilityFunctions = require("../utility")
const filterActivityField = utilityFunctions.filterActivityField
class activityCollManager{
    static async getActivities(){
        const activities = await Activity.find({})
        return activities 
    }
    static async deleteActivity(activityId){
        const deletedActivity = await Activity.findByIdAndDelete(activityId)
        if (deletedActivity) {
            return { success: true, message: "Activity removed successfully" }
        }
        else {
            return{ success: false, error: "Activity not found" }
        }
    }
    static async saveActivity(activity){
        const newActivity = new Activity(activity)
        await newActivity.save()
        return newActivity
    }
    static async myActivity(userId){
        const userActivities = await Activity.find({ userId: userId })
        return userActivities
    }
    static async updateCapacity(activityId, capacity){
        const updatedActivity = await Activity.findByIdAndUpdate(
            activityId,
            { $set: { capacity: capacity } },
            { new: true }
        )
        if (updatedActivity) {
            return { success: true, message: "Activity updated successfully", data: updatedActivity }
        } 
        else {
            return{ success: false, error: "Activity not found" }
        }
    }
    static async updateActivityFields(activityId, date, transportationType, preferredGender){
        const updateFields = filterActivityField(date, transportationType, preferredGender)
        const updatedActivity = await Activity.findByIdAndUpdate(
            activityId,
            { $set: updateFields },
            { new: true }
        )
        if (updatedActivity) {
            return { success: true, message: "Activity updated successfully", data: updatedActivity }
        } 
        else {
            return{ success: false, error: "Activity not found" }
        }
    }

}

module.exports = activityCollManager