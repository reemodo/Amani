const USER_ID = 0
class ActivityController {
    constructor(model, view) {
      this.model = model
      this.view = view
    }
  
    showActivities(){

    }

    filterActivities(){

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
        
          const data = await this.model.addActivity(USER_ID, activityData)
          const success = "Your Activity was added, you can see it in My Activities page"
          this.handleSuccess(success)
        } catch (error) {
          this.handleError(error)
          console.error('Error adding activity:', error)
        }
    }

    showMyActivities(){

    }

    deleteMyActivity(){

    }

    editMyActivity(){
        
    }
}