class ActivityController {
    constructor(model, view) {
      this.model = model
      this.view = view
    }
  

    async filterActivities() {
        try {
            const filterData = {
                transportationType: $('#transportationType').val(),
                specificGender: $('#specificGender').is(':checked'),
                date: $('#date').val(),
                activityType: $('#activityType').val(),
                location: $('#location').val()
            }

            const data = await this.model.getAllActivities(USER_ID, filterData)
            this.view.renderData(data)
        } catch (error) {
            console.error('Error filtering or fetching activities:', error)
        }
    }

    async addActivity() {
        try {
          const activityData = {
            date: $('#date').val(),
            location: $('#location').val(),
            transportationType: $('#transportationType').val(),
            capacity: $('#capacity').val(),
            gender: $('#gender').val(),
            activityType: $('#activityType').val(),
          }
          await this.model.addActivity(USER_ID, activityData)
          this.view.handleSuccess(SUCCESS)
        } catch (error) {
          this.view.handleError(error)
          console.error('Error adding activity:', error)
        }
    }

    async showMyActivities() {
        try {
            const myActivities = await this.model.getMyActivities(USER_ID)
            this.view.renderMyActivities(myActivities)

        } catch (error) {
            console.error('Error fetching user activities:', error)
        }
    }
    

    async deleteMyActivity(activityId) {
        try {
            await this.model.deleteMyActivity(USER_ID, activityId)
            this.showMyActivities()
          
        } catch (error) {
          console.error('Error removing activity:', error)
        }
    }

    async editCapacity(activityId, newCapacity) {
        try {
            await this.model.editCapacity(USER_ID, activityId, newCapacity)
            this.showMyActivities()
        } catch (error) {
          console.error('Error editing capacity:', error)
        }
      }
}