const activityModel = new ActivityModel()
const renderer = new Renderer()
const activityController = new ActivityController(activityModel, renderer)

const addActivity = function(){
    activityController.addActivity()
}

function init() {
    activityModel.getAllActivities(USER_ID).then((allActivities) =>{
        const activities = allActivities.map(activityData =>  new Activity(activityData))
        renderer.renderActivities(activities)
    })
}
  
init()

