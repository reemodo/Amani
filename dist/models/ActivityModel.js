class ActivityModel {


    async getAllActivities(userId, filterData) {
        try {
          const data = await $.get(`/activities/${userId}`)
          if(isEmpty(filterData)){
            const data = await $.get(`/activities/${userId}?filterData: ${filterData}` )
          }
          return data
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

    async editCapacity(userId, activityId, newCapacity) {
          return editResult = await $.ajax({
            url: `/activities/${activityId}`,
            type: 'PATCH',
            data: { userId, newCapacity },
            success: function() {
                return true
             },
             message: 'Activity updated successfully',
           
             error: function(xhr, status, error) {
                 console.error(error)
             }
          })
      }
}
  
