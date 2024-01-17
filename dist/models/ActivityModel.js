class ActivityModel {
    async login (email, password){
        try {
           await $.ajax({
            url: "/login",
            method: 'POST',
            dataType: 'json',contentType: 'application/json',
            data: JSON.stringify({ email, password }),
            success: function(data) {
              localStorage.setItem('token', data.accessToken);
              localStorage.setItem('id', data.id)
              window.location.href = '../index.html';
            },
            error: function(error, textStatus, errorThrown) {
              if (error.status === 401) {
                console.log('Unauthorized error:', errorThrown);
              } else {
                console.log('Request failed:', errorThrown);
              }
            }
          });
            
         } catch (error) {
             throw error
         }
    }
    async getUserUniversity(userId) {
        try {
            return await $.ajax({
                url: `/activities/university/${userId}`,
                type: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                success: function(universityName) {
                   return universityName
                },              
                error: function(error) {
                    console.error(error)
                }
            })
        } catch (error) {
            throw error
        }
    }

    async getAllActivities(userId,filtered, filterData) {
        try {
            const universityName = await this.getUserUniversity(userId)
          if(filtered){
            //return await $.get(`/activities/${userId}?${$.param(filterData)}` )
            filterData.universityName = universityName
            return await $.ajax({
                url: `/activities/${userId}?${$.param(filterData)}`,
                type: 'GET',
                contentType: 'application/json',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                  },
                success: function(data) {
                   return data
                },              
                error: function(error) {
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
                return response
              },
              error: function(error) {
                return error
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
                url: `/activities/myActivities/${userId}`,
                type: 'GET',
                contentType: 'application/json',
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
            contentType: 'application/json',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
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
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            success: function(response) {
                alert("Your capacity has successfully changed.")
              },
              error: function(error) {
                alert("Couldn't change the capacity.")
              }
          })
      }
}
  
