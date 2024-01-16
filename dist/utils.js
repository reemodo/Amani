const TransportationIcons = {"Bus": "fa-bus", "Car": "fa-car"}
const PreferredGenderText = {"f":"Female", "m":"Male", "u":"No Preferred Gender"}
const ActivityName = {"fromSchool": "From School", "toSchool": "To School"}
const USER_ID = 0 
const SUCCESS = "Your Activity was added, you can see it in My Activities page"
function isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object
}