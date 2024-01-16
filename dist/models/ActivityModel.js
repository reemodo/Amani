class ActivityModel {
    async getAllActivities(userId, filterData) {
        try {
            
          if(filterData != undefined && !isEmpty(filterData)){
            return await $.get(`/activities/${userId}?filterData: ${filterData}` )
          }
          else {
             return await $.get(`/activities/${userId}`)
          }
        } catch (error) {
          throw error
        }
    }

    async addActivity(userId, activityData) {
        try {
            await $.post(`/activities/${userId}`, activityData)
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


    async deleteMyActivity(userId, activityId) {
        await $.ajax({
            url: `/activities/${activityId}`,
            type: 'DELETE',
            data: { userId },
            success: function() {
               return true
            },
            message: 'Activity removed successfully',
          
            error: function(xhr, status, error) {
                console.error(error)
            }
        })
    }

    editMyActivity(){
        
    }
}
  
