const Activity = require('../models/activity')

class activityCollManager{
    static async getActivities(){
        const activities = await Activity.find({})
        return activities 
    }
}

module.exports = activityCollManager