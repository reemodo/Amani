class Activity{
    constructor(activity){
        this.activityName= ""
        this.to = ""
        this.from = ""
        this.location = activity.location
        this.activityType= activity.activityType
        this.universityName = activity.universityName
        this.date = activity.date.split('T')[0]
        this.capacity = activity.capacity
        this.genderText = PreferredGenderText[activity.preferredGender]
        this.icon = TransportationIcons[activity.transportationType]
        this.handelActivityType()
    }
    handelActivityType( ){
        if(this.activityType =="fromSchool"){
            this.activityName= "From School"
            this.to = this.location
            this.from = this.universityName
        }
        else {
            this.activityName= "To School"
            this.to =  this.universityName
            this.from = this.location
        }
    }
}
