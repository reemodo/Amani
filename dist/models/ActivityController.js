class ActivityController {
    constructor(model, view) {
      this.model = model
      this.view = view
    }
  

    async filterActivities() {
        try {
            let data
            const filterData = {
                university: $('#university').val(),
                transportationType: $('#transportationType').val(),
                specificGender: $('#specificGender').is(':checked'),
                date: $('#date').val(),
                location: $('#location').val(),
                activityType: $('#activityType').val(),
            }
        
            if (this.isEmpty(filterData)) {
                data = await this.model.getAllActivities(USER_ID)
            } else {
                data = await this.model.filterActivities(USER_ID, filterData)
            }
        
            this.view.renderData(data)
        } catch (error) {
            console.error('Error filtering or fetching activities:', error)
        }
    }
    
    isEmpty(obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object
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
          
          this.handleSuccess(SUCCESS)
        } catch (error) {
          this.handleError(error)
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
    

    deleteMyActivity(){

    }

    editMyActivity(){
        
    }
}