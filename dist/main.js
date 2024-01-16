
const activityModel = new ActivityModel()
const renderer = new Renderer()
const activityController = new ActivityController(activityModel, renderer)

const addActivity = function(){
    activityController.addActivity()
}

const filterActivity= function(){
    
}
async function deleteActivity(activityID){
    await activityController.deleteMyActivity(activityID)
    
}

async function myActivity(){
    const activities = [{activityId:0, to:"Harvard", from:"Tel Aviv",activityName:"To University", transportationType:"Car", icon:"fa-car", capacity:"2", telephone:"972532792007", date:"20/1/2024", genderText:"Female"}]
    const modalData = {transportation:["Bus","Car"], university:"Harvard"}
    renderer.renderMyActivities(activities)
    renderer.renderModal(modalData)
    renderer.renderFilter(modalData)
}

async function init() {
    const allActivities = await activityModel.getAllActivities(USER_ID)
    const activities = allActivities.map(activityData => new Activity(activityData))
    const modalData = {transportation:["Bus","Car"], university:"Harvard"}
    renderer.renderActivities(activities)
    renderer.renderModal(modalData)
    renderer.renderFilter(modalData)

}
async function init() {
    // const allActivities = await activityModel.getAllActivities(USER_ID)
    const activities = [{activityId:0, to:"Harvard", from:"Tel Aviv",activityName:"To University", transportationType:"Car", icon:"fa-car", capacity:"2", telephone:"972532792007", date:"20/1/2024", genderText:"Female"}]
    const modalData = {transportation:["Bus","Car"], university:"Harvard"}
    renderer.renderActivities(activities)
    renderer.renderModal(modalData)
    renderer.renderFilter(modalData)
}

init()








