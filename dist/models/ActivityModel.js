class ActivityModel {

    async getUserUniversity(userId) {
        try {
            return await $.get(`activities/university/${userId}`)
        } catch (error) {
            throw error
        }
    }

    async getAllActivities(userId,filtered, filterData) {
        try {
            const universityName = await this.getUserUniversity(userId)
          if(filtered){
            filterData.universityName = universityName
            return await $.get(`/activities/${userId}?${$.param(filterData)}` )
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
            const data = await $.get(`/activities/myActivities/${userId}`)
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
        console.log({ userId, newCapacity })
          return await $.ajax({
            url: `/activities/${activityId}`,
            type: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify({ userId,"capacity": newCapacity }),
            success: function(response) {
                alert("Your capacity has successfully changed.")
              },
              error: function(error) {
                alert("Couldn't change the capacity.")
              }
          })
      }
}
  
