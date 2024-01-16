class ActivityModel {

    showActivities(){

    }

    filterActivities(){

    }

    async addActivity(userId, activityData) {
        try {
            const data = await $.post(`/activities/${userId}`, activityData)
            return data
        } catch (error) {
            throw error
        }
    }

    showMyActivities(){

    }

    deleteMyActivity(){

    }

    editMyActivity(){
        
    }
}
  
