class ActivityModel {
    async getAllActivities(userId,filtered, filterData) {
        try {
            
          if(filtered){
            //return await $.get(`/activities/${userId}?${$.param(filterData)}` )
            return await $.ajax({
                url: `/activities/${userId}?${$.param(filterData)}`,
                type: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                  },
                success: function() {
                   return true
                },              
                error: function(xhr, status, error) {
                    console.error(error)
                }
            })
          }
          else {
             //return await $.get(`/activities/${userId}`)
             return await $.ajax({
                url: `/activities/${userId}`,
                type: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                success: function() {
                   return true
                },              
                error: function(xhr, status, error) {
                    console.error(error)
                }
            })
          }
        } catch (error) {
          throw error
        }
    }

    async addActivity(userId, activityData) {
        try {
           // await $.post(`/activities/${userId}`, activityData)
            await $.ajax({
            url: `/activities/${userId}`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(activityData),
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            success: function(response) {
                alert("Your activity has successfully added.")
              },
              error: function(error) {
                alert("Couldn't add the activity.")
              }
          })
           
        } catch (error) {
            throw error
        }
    }

    async showMyActivities(userId) {
        try {
            // const data = await $.get(`/activities/myActivities/${userId}`)
            const data = await $.ajax({
                url: `/activities/${userId}`,
                type: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                success: function() {
                   return true
                },              
                error: function(xhr, status, error) {
                    console.error(error)
                }
            })
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
  
