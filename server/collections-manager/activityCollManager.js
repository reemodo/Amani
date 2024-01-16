const Activity = require('../models/activity')

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
}

module.exports = activityCollManager