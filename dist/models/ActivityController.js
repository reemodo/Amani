class ActivityController {
    constructor(model, view) {
      this.model = model
      this.view = view
    }
    async register(){
      let gender
      if($("#female-register").is(':checked')){
          gender='f'
      }
      else{
          gender = 'm'
      }
      const user={
          name:$("#name-register").val(),
          email:$("#email-register").val(),
          password:$("#password-register").val(),
          gender:gender,
          universityName:$("#university-register").val(),
          phoneNumber:"972"+$("#phone-register").val().slice(1)
  
      }
      await this.model.register(user)
    }
    async login (){
      const email = $('#login-mail').val()
      const password = $('#login-password').val()
      await this.model.login(email, password)

    }
    async filterActivities(filtered = false) {
        try {
          const to = $('#toSchoolFilter')
          const from = $('#fromSchoolFilter')
          const location= $('#locationFilter').val()
          let activityType = undefined
          if (location != "" && to.is(":checked")) {
            activityType = "toSchool"
          } else if(location != "" && from.is(":checked") ){
            activityType = "fromSchool"
          }
          const universityName = await this.model.getUserUniversity(USER_ID)

            const filterData = {
                transportationType: $('#transportationTypeFilter').val(),
                specificGender: $('#genderFilter').is(':checked'),
                date: $('#dateFilter').val(),
                location:location,
                activityType: activityType,

            }

            filterData.universityName = universityName

            const allActivities = await this.model.getAllActivities(USER_ID, filtered,filterData)
            const activities = allActivities.map(activityData => new Activity(activityData))
            const modalData = {transportation:["Bus","Car"], university:universityName}
            this.view.renderPage(activities,modalData)
        } catch (error) {
            console.error('Error filtering or fetching activities:', error)
        }
    }

    async addActivity() {
        try {
          
          const to = $('#toSchool')
          let activityType = undefined
          if ( to.is(":checked")) {
            activityType = "toSchool"
          } else {
            activityType = "fromSchool"
          }
          const activityData = {
            date: $('#date').val(),
            location: $('#location').val(),
            transportationType: $('#transportationType').val(),
            gender: $('#gender').is(':checked'),
            activityType: activityType,
          }
          if(activityData.transportationType === "Car")
          {
            activityData.capacity = $('#capacity').val()
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
            const universityName = await this.model.getUserUniversity(USER_ID)
            const myActivities = await this.model.showMyActivities(USER_ID)
            const activities = myActivities.map(activityData => new Activity(activityData))
            const modalData = {transportation:["Bus","Car"], university:universityName}
            this.view.renderMyPage(activities,modalData)

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
