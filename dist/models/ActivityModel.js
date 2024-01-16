class ActivityModel {


    static async getAllActivities(userId) {
        try {
          const data = await $.get(`/activities/${userId}`)
          return data
        } catch (error) {
          throw error
        }
    }
    
    static async filterActivities(userId, filterData) {
        try {
          const data = await $.get(`/activities/${userId}`, filterData)
          return data
        } catch (error) {
          throw error
        }

    }

    async addActivity(userId, activityData) {
        try {
            const data = await $.post(`/activities/${userId}`, activityData)
            return data
        } catch (error) {
            throw error
        }
    }

    async showMyActivities(userId) {
        try {
            const data = await $.get(`/myActivities/${userId}`)
            return data
        } catch (error) {
            throw error
        }
    }

    deleteMyActivity(){

    }

    editMyActivity(){
        
    }
}
  
